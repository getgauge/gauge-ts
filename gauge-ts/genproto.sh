set -eu
# ponytail: dropped pipefail because the script has no pipelines and dash (Ubuntu /bin/sh) rejects it.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Auto-init submodule if .proto files are missing (e.g. fresh clone without --recurse-submodules)
if [ ! -f "$SCRIPT_DIR/../gauge-proto/messages.proto" ]; then
  git -C "$SCRIPT_DIR/.." submodule update --init gauge-proto
fi

# Run protoc from the script directory with relative paths so the Windows
# protoc.exe binary doesn't choke on MSYS-style /d/a/... paths from Git Bash
# (MSYS heuristics skip args like --js_out=/d/a/...). Relative paths are not
# translated, so protoc sees the same shape on every platform.
cd "$SCRIPT_DIR"
PROTO_DIR="../gauge-proto"
OUTPUT_DIR="src/gen"

# Non-destructive: let protoc overwrite per-file. Avoids wiping the output dir
# before protoc runs, which previously left the working copy empty on failure.
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
