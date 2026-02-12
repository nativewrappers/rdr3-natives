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

# Headers for Cloudflare Pages - tell browsers the protobuf binary is gzip-encoded
cat > dist/_headers << 'EOF'
/natives.bin
  Content-Encoding: gzip
EOF

curl -L https://gist.githubusercontent.com/fingaweg/2a7653c73daf985f73667e9c424cb624/raw/399fa4738522edcb92b05d55d32f80f5cc3150a1/scrCommand_dump_b1491.50 -o dist/addressDump || true

# Download Cfx natives
curl -L https://static.cfx.re/natives/natives.json -o dist/cfx/natives.json || true
curl -L https://static.cfx.re/natives/natives_cfx.json -o dist/cfx/natives_cfx.json || true
