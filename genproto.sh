cd gauge-proto
npx --no-install pbjs -t static-module -w commonjs -o ../src/messages.js *.proto
npx --no-install pbts -o ../src/messages.d.ts ../src/messages.js
cd ..
