set -eu

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ ! -f "$SCRIPT_DIR/../gauge-proto/messages.proto" ]; then
  git -C "$SCRIPT_DIR/.." submodule update --init gauge-proto
fi

cd "$SCRIPT_DIR"
PROTO_DIR="../gauge-proto"
OUTPUT_DIR="src/gen"

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

grpc_tools_node_protoc \
    -I  $PROTO_DIR \
    --js_out=import_style=commonjs,binary:$OUTPUT_DIR \
    $PROTO_DIR/messages.proto $PROTO_DIR/spec.proto

grpc_tools_node_protoc \
    -I $PROTO_DIR \
    --js_out=import_style=commonjs,binary:$OUTPUT_DIR \
    --grpc_out=grpc_js:$OUTPUT_DIR \
    $PROTO_DIR/services.proto

grpc_tools_node_protoc \
    --plugin="../node_modules/.bin/protoc-gen-ts" \
    --ts_out=generate_package_definition:$OUTPUT_DIR \
    -I $PROTO_DIR \
    $PROTO_DIR/spec.proto $PROTO_DIR/messages.proto $PROTO_DIR/services.proto
