#!/bin/sh
set -e

# Download nativegen
curl -L -H "Cache-Control: no-cache" "https://github.com/nativewrappers/NativeCodeGen/releases/latest/download/nativegen-linux-x64?$(date +%s)" -o nativegen
chmod +x nativegen

# Generate outputs
mkdir -p dist dist/cfx
./nativegen generate -i . -o dist/natives.json -f json
./nativegen generate -i . -o dist/natives.bin -f proto
curl -L https://raw.githubusercontent.com/nativewrappers/NativeCodeGen/main/src/NativeCodeGen.Core/Export/natives.proto -o dist/natives.proto

# Download Cfx natives
curl -L https://static.cfx.re/natives/natives.json -o dist/cfx/natives.json || true
curl -L https://static.cfx.re/natives/natives_cfx.json -o dist/cfx/natives_cfx.json || true
