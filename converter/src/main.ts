import * as fs from "node:fs/promises";
import cfx_rdr from "./natives_rdr3.json" with { type: "json" };
import rdr3_rdr from "./rdr3natives.json" with { type: "json" };
import camelcase from "camelcase";

type RdrNamespace<T> = {
	[key: string]: { [key: string]: T };
}

type Params = {
	name: string,
	type: string
}

type CfxRdrNatives = {
	name: string,
	params: Params[],
	results: string,
	description: string,
	examples: never[]
	hash: string,
	ns: string,
	aliases: string[],
	manualHash: true
}

type Rdr3Natives = {
	name: string,
	params: Params[],
	return_type: string,
	comment: string,
	examples: never[]
	hash: string,
	aliases: string[] | undefined,
	build: string,
	apiset: string
};

const NATIVE_DIR = `../`;

const get_name_for_file = (v: string) => {
	let file_name = v;
	if (file_name.startsWith("_")) {
		// remove _ prefix
		file_name = file_name.slice(1);
	}
	if (file_name.startsWith("0x")) {
		// add N_ to front of the file name for codegen
		// also make the name lowercase (since this is how its done in fivem codegen, not sure if its actually relevant)
		return `N_${file_name.toLowerCase()}`;
	}

	return camelcase(file_name, { pascalCase: true });
}

setImmediate(async () => {
	const cfx_rdr_typed = cfx_rdr as unknown as RdrNamespace<CfxRdrNatives>;
	const rdr3_natives_typed = rdr3_rdr as unknown as RdrNamespace<Rdr3Natives>;

	for (const [namespace, namespace_data] of Object.entries(rdr3_natives_typed)) {
		for (const [native_hash, native_data] of Object.entries(namespace_data)) {
			const cfx_version = cfx_rdr_typed[namespace]?.[native_hash];

			// if the native doesn't exist in the cfx version, swap it over to it
			if (!cfx_version) {
				cfx_rdr_typed[namespace] = cfx_rdr_typed[namespace] ?? {};
				cfx_rdr_typed[namespace][native_hash] = {
					name: native_data.name,
					params: native_data.params,
					results: native_data.return_type,
					description: native_data.comment,
					examples: native_data.examples,
					hash: native_hash,
					ns: namespace,
					aliases: [],
					manualHash: true,
				}
				continue;
			} else {
				// always take rdr3 over ours
				cfx_version.params = native_data.params;
				cfx_version.description = native_data.comment;
				cfx_version.examples = native_data.examples;
				cfx_version.aliases = cfx_version.aliases ?? [];

				if (cfx_version.name === native_data.name) { continue; }
				if (cfx_version.name && cfx_version.name[0] !== "_" && native_data.name[0] === "_") { continue; }

				// if our names don't match take rdr3 native db over ours
				// don't import name changes for confirmed names, not sure why rdr3natives did this.
				cfx_version.aliases.push(cfx_version.name);
				cfx_version.name = native_data.name;
			}
		}
	}

	let file_promises = [];

	for (const [namespace, namespace_data] of Object.entries(cfx_rdr_typed)) {
		const NAMESPACE_PATH = `${NATIVE_DIR}${namespace}`;
		try {
			await fs.mkdir(NAMESPACE_PATH)
		} catch (e) {}
		for (const [native_hash, native_data] of Object.entries(namespace_data)) {
			let converted_aliases;
			if (native_data.aliases && native_data.aliases.length > 0) {
				converted_aliases = native_data.aliases.map((v) => { if (v) return `"${v}"` }).filter(v => v).join(",");
				// special case
				if (converted_aliases === "") converted_aliases = undefined;
			}
			const converted_params = native_data.params.map((v) => { 
				let return_type = v.type;
				if (return_type.includes('const char')) {
					return_type = `char*`;
				}
				return `${return_type} ${v.name}`
			}).join(", ");
			const converted_param_markdown = native_data.params.map((v) => `* **${v.name}**:`).join("\n");
			const examples_converted = `## Examples\n\n${native_data.examples.map((v) => `${v}\n`).join("\n")}`;
			const native_gen = `---
ns: ${namespace}${converted_aliases !== undefined ? `\naliases: [${converted_aliases}]` : ""}
apiset: client
---
## ${native_data.name}

\`\`\`c
// ${native_hash}
${native_data.results} ${native_data.name}(${converted_params});
\`\`\`

${native_data.description ? `${native_data.description}\n` : ""}
${native_data.params.length > 0 ? `## Parameters\n${converted_param_markdown}\n` : ""}
${native_data.results !== "void" ? "## Return value\n" : ""}
${native_data.examples?.length > 0 ? examples_converted : ""}
`.trimEnd()
				const name = get_name_for_file(native_data.name ?? native_hash);
				file_promises.push(fs.writeFile(`${NAMESPACE_PATH}/${name}.mdx`, native_gen, 'utf8'));

		}
	}

	await Promise.all(file_promises);
})
