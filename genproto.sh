cd gauge-proto
pbjs -t static-module -w commonjs -o ../src/gen/messages.js *.proto
pbts -o ../src/gen/messages.d.ts ../src/gen/messages.js
cp *.proto ../src/gen
rm ../src/gen/api.proto
cd ..
