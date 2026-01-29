# RDR3 Natives Documentation

This repository contains documentation for Red Dead Redemption 3 native functions in MDX format, along with supporting enums and structs.

## Credits
- alloc8or & finaweg - The initial native generation came from [rdr3-nativedb-data](https://github.com/alloc8or/rdr3-nativedb-data/)
- femga - A lot of research is used from their [rdr3 discoveries](https://github.com/femga/rdr3_discoveries/)
- Halen84 - A lot of the enums here come from their [flags and enums project](https://github.com/Halen84/RDR3-Native-Flags-And-Enums)

# Terminology

ScRT -> Script Runtime

## Directory Structure

```
rdr3-natives/
├── ENTITY/              # Native definitions organized by namespace
├── PED/
├── VEHICLE/
├── ...
└── code/
    ├── enums/           # Enum definitions
    ├── structs/         # Struct definitions
    └── shared-examples/ # Reusable code examples
```

## MDX Native Format

Each native function is documented in an MDX file with the following structure:

````mdx
---
ns: NAMESPACE_NAME
apiset: client
---
## NATIVE_NAME

```c
// 0xHASHVALUE
ReturnType NATIVE_NAME(Type1 param1, Type2 param2);
```

Description of what the native does.

## Parameters
* **param1**: Description of param1
* **param2**: Description of param2

## Return value
Description of what is returned.

## Examples
<SharedExamples name="ExampleName" />
````

### Frontmatter

The YAML frontmatter at the top of each file contains:

| Field | Required | Description |
|-------|----------|-------------|
| `ns` | Yes | The namespace this native belongs to (e.g., `ENTITY`, `PED`) |
| `apiset` | Yes | API set, typically `client` |
| `aliases` | No | Alternative names or hashes for this native |

### Native Declarations

Native declarations must *always* have the following format

````mdx
## _SOME_NATIVE
```c
// 0xHASHVALUE
void _SOME_NATIVE();
```
````

When using default variables you should define the codeblock to be `cpp` instead of `c` for proper
formatting.

Much like the FiveM documentation, all names that start with `_` are ***unconfirmed***,
unlike FiveM, we have no way of knowing if a native name is correct (besides natives that are already confirmed),
as such you should **NEVER** remove a natives underscore prefix.


### Sections

Having a header section that's not defined below will error CodeGen.

| Section | Required | Description |
|---------|----------|-------------|
| `## NATIVE_NAME` | Yes | The native function name as a heading |
| `## Parameters` | If has params | Parameter descriptions |
| `## Return value` | If non-void | Return value description |
| `## Examples` | No | Usage examples |

## Function Signature Syntax

### Basic Types

| Type | Description |
|------|-------------|
| `void` | No return value |
| `int`, `u32`, `i32` | Integer types |
| `float`, `f32` | Floating point |
| `BOOL`, `bool` | Boolean |
| `char*`, `string` | String pointer |
| `Hash` | unsigned 32-bit hash value |
| `Vector3` | 3D vector (x, y, z) |
| `Any`, `Any*` | Unknown/generic type |

The Lua and JS ScRT's don't have reference types outside of tables/objects, so in
the function call to a native will not have have a way to define an initial value
for that native, it will be created internally and added to the return type, or
we need to specify that a value is an input value with `@in`, in which case
whatever value is passed to the native call will made the initial pointer value
and used in the native call and added to the return type.

Using pointer fields will modify how a native is returned, so even if a native
has a `void` return type it will now return the value of the pointer, this also
means that if a native already has a return type it will now return two values
instead of one.

In Lua this isn't that big of a problem, since you don't have to care about additional
parameters if you don't need them.

```lua
-- that means we can do this
local retValue, ptrValue = SomeNativeThatTakesAPointerInternally();
-- or not care about ptrValue and elude it
local retValue = SomeNativeThatTakesAPointerInternally();
```

In JS we don't have the exact same luxury, since we will now get back an array,
so we *have* to make sure we use an array destructure, even if we only care about
the first value.
```js
const [retValue, ptrValue] = SomeNativeThatTakesAPointerInternally();
// we can still elude the pointer value
const [retValue] = SomeNativeThatTakesAPointerInternally();
```


### Handle Types

Entity handles represent game objects:

| Type | Description |
|------|-------------|
| `Entity` | Base entity type |
| `Ped` | Ped/character |
| `Vehicle` | Vehicle |
| `Object` | World object |
| `Player` | Player handle |
| `Cam` | Camera |
| `Blip` | Map blip |
| `Pickup` | Pickup item |

Internally these will all be treated like an `i32`.

### Default Parameter Values

Parameters can have default values:

```cpp
// 0xD49F9B0955C367DE
Ped CREATE_PED(Hash modelHash, Vector3 pos, float heading, BOOL isNetwork = false, BOOL bScriptHostPed = true);
```

All primitive types are able to have default values (Entity, Ped, bools, floats, etc)

### Parameter Attributes

Attributes modify parameter behavior and are placed before the type:

```c
ReturnType NATIVE_NAME(@attribute Type paramName);
```

| Attribute | Description |
|-----------|-------------|
| `@this` | When CodeGen generates class types, this tells codegen that this parameter is what we should use to generate the classes, not the first argument |
| `@notnull` | Tells CodeGen that the specified string *cannot* be null |
| `@in` | Tells CodeGen that this pointer field needs to be an input value, and is expected to be initialized before called |

#### `@this` Attribute

Marks a parameter as the instance receiver for class generation:

```c
// By default whenever a entity type is defined as the first argument it will
// be the class the native gets applied to, of we use @this on the second parameter
// it will instead use that parameter as the class to get applied to.
BOOL SOME_WEIRD_NATIVE_THAT_TAKES_PED_FIRST(Ped ped, @this Entity entity);
```

#### `@notnull` Attribute

In this code base (unlike Cfx's) `char*` will be treated as `string | null` in
typings, if a native *cannot* take a null string it should have the @notnull attribute
be applied to the argument

```c
// Returns string instead of string|null
char* GET_NAME(@notnull char* hash);
```

#### `@in` Attribute

Marks that a field needs to be initialized before called

```c
// When calling the native entity will be initialized 
void DELETE_ENTITY(@in Entity* entity);
```

### Output Parameters

Pointer types (except `char*` and struct pointers) are treated as output parameters unless
specified with `@in`:

```c
// coordsOut is an output - caller receives the value
BOOL GET_COORDS(Entity entity, Vector3* coordsOut);
```

## Enum Format

Enums are defined in `code/enums/` as `.mdx` files:

```cpp
enum EnumName
{
    VALUE_ONE = 0,
    VALUE_TWO = 1,
    VALUE_THREE = 2,
};
```

### Enums with Base Types

Enums can specify a base type:

```cpp
enum eWeaponHash : Hash
{
    WEAPON_PISTOL = 0x1234ABCD,
    WEAPON_RIFLE = 0x5678EF01,
};
```

## Struct Format

Structs are defined in `code/structs/` as `.c` files:

By default all fields of a struct are aligned to `8` bytes.

```c
struct StructName {
    Type fieldName;
    Type anotherField;
};
```

### Struct Field Attributes

In order to handle class generation for structs we have specific attributes

| Attribute | Description |
|-----------|-------------|
| `@in` | The field is expected to be initialized and set before used, only generates a set version of the field |
| `@out` | The field is expected to be outputed and will only generate getters |
| `@alignas(N)` | The field will be aligned to `N` bytes instead of the default 8 |
| `@padding` | Needed whenever marking padding to be an exact value, CodeGen will try to align this to `8` bytes, this will instead apply the alignment of the specified type (i.e. u8 -> 1 byte, u16 -> 2 bytes, etc.) |

### Nested Structs and Arrays

```c
// you can use alignas on a struct and it will set the alignment for the entire struct
@alignas(4)
struct InnerStruct {
    @out Hash value;
    // alignas inside of a struct still take precedence, this will be aligned to
    // a single byte instead of the normal 8 bytes.
    @alignas(1) u8 unkValue;
};

struct OuterStruct {
    @in u8 count;
    struct InnerStruct items[3];
    @padding u8 pad[48];
};
```

### Documentation Comments

Use `///` for docs, these will be applied to the class when outputed.

```c
struct Example {
    /// Description of this field
    @in u8 fieldName;
};
```

## Shared Examples

Reusable code examples are stored in `code/shared-examples/` and referenced using:

```mdx
## Examples
<SharedExamples name="ExampleName" />
```

It should be noted that even if you don't put the `SharedExamples` mdx component,
CodeGen will internally note what natives are used in an example, and put them
under related examples.

Example file:

````mdx
```lua
CreateThread(function()
    local model = `a_c_cat_01`
    RequestModel(model)
    while not HasModelLoaded(model) do
        Wait(0)
    end
    local ped = CreatePed(model, vector3(0, 0, 0), 0.0, false, true)
end)
```
````

## Contributing

When adding or updating native documentation:

1. Use the correct namespace directory
2. Include the hash comment in the code block
3. Document all parameters
4. Add return value description for non-void functions
5. Include examples where helpful
