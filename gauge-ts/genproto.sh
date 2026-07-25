set -eu

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ ! -f "$SCRIPT_DIR/../gauge-proto/messages.proto" ]; then
  git -C "$SCRIPT_DIR/.." submodule update --init gauge-proto
fi

# Run protoc from the script directory with relative paths so the Windows
# protoc.exe binary doesn't choke on MSYS-style paths from Git Bash.
cd "$SCRIPT_DIR"
PROTO_DIR="../gauge-proto"
OUTPUT_DIR="src/gen"

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# grpc-tools stays as a dep only because it ships a protoc binary; the actual
# codegen is done by the ts-proto plugin (grpc-js service defs, string int64).
grpc_tools_node_protoc \
    --plugin="../node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out="$OUTPUT_DIR" \
    --ts_proto_opt=outputServices=grpc-js \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=forceLong=string \
    -I "$PROTO_DIR" \
    "$PROTO_DIR"/messages.proto \
    "$PROTO_DIR"/spec.proto \
    "$PROTO_DIR"/services.proto
