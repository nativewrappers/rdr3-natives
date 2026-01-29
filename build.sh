#!/bin/sh
set -e

# Download nativegen (musl build for Cloudflare Pages)
curl -L https://github.com/nativewrappers/NativeCodeGen/releases/latest/download/nativegen-linux-musl-x64 -o nativegen-linux-musl-x64
chmod +x nativegen-linux-musl-x64

# Generate outputs
mkdir -p dist/next dist/cfx
./nativegen-linux-musl-x64 generate -i . -o dist/next/natives.json -f json
./nativegen-linux-musl-x64 generate -i . -o dist/next/natives.bin -f proto
curl -L https://raw.githubusercontent.com/nativewrappers/NativeCodeGen/main/src/NativeCodeGen.Core/Export/natives.proto -o dist/next/natives.proto

# Download Cfx natives
curl -L https://static.cfx.re/natives/natives.json -o dist/cfx/natives.json || true
curl -L https://static.cfx.re/natives/natives_cfx.json -o dist/cfx/natives_cfx.json || true
