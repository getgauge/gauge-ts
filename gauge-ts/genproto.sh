export PATH=$PATH:"./node_modules/.bin"

OUTPUT_DIR="src/gen"
PROTO_DIR="gauge-proto"

rm -rf $OUTPUT_DIR
mkdir $OUTPUT_DIR

grpc_tools_node_protoc \
    -I  $PROTO_DIR \
    --js_out=import_style=commonjs,binary:$OUTPUT_DIR \
    ./$PROTO_DIR/messages.proto ./$PROTO_DIR/spec.proto

grpc_tools_node_protoc \
    -I $PROTO_DIR \
    --js_out=import_style=commonjs,binary:$OUTPUT_DIR \
    --grpc_out=grpc_js:$OUTPUT_DIR \
    ./$PROTO_DIR/services.proto

grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=generate_package_definition:$OUTPUT_DIR \
    -I $PROTO_DIR \
    ./$PROTO_DIR/spec.proto ./$PROTO_DIR/messages.proto ./$PROTO_DIR/services.proto

