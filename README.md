# Gauge-Ts

This project adds Typescript [language plugin](https://docs.gauge.org/latest/installation.html#language-runner) for [gauge](http://gauge.org).

The plugin is authored in [typescript](https://en.wikipedia.org/wiki/TypeScript).

## Development

#### Build from Source

##### Requirements
- [Gauge](https://gauge.org)
- [Node js](https://nodejs.org/en/) v20.19+ or v22.12+
- [pnpm](https://pnpm.io/) v10+ (`corepack enable pnpm`)
- [JQ](https://stedolan.github.io/jq/) (for unix)

Run `pnpm install` once to set up the workspace. The `gauge-proto` submodule is
only needed to regenerate the protobuf bindings (`pnpm --filter gauge-ts run
gen-proto`); the generated sources are committed, so a plain build does not need
it. Initialise it with `git submodule update --init` if you do want to regenerate.


Running `build.sh`(*nix), or `.\build.ps1`(windows/powershell) should give the list of all tasks available. Below sections detail some commonly used tasks.

##### How TypeScript is used

The plugin uses TypeScript for two unrelated jobs, and they are kept apart:

* **Running a user's step implementations.** [tsx](https://tsx.is) transpiles
  them at run time. It does not touch the compiler API, so a Gauge project can
  pin whatever TypeScript version it likes.
* **Reading a user's step implementations** — finding `@Step` decorators for the
  step cache, refactoring and stub generation. TypeScript 7 removed the
  in-process compiler API (`typescript` now exports only `version`), so this goes
  through `typescript/unstable/*`, which reaches the native `tsgo` server over
  IPC. All of that coupling lives in `src/helpers/TsProject.ts`; nothing else in
  the runner imports TypeScript. Those entry points are explicitly *unstable*, so
  a TypeScript upgrade should start by rebuilding and running the unit tests for
  that file.

Since the runner loads that ESM-only API from CommonJS, it needs `require(esm)`,
which is why the launcher rejects Node below 20.19/22.12.

##### Compiling

To compile Typescript to commonjs:

````
./build.sh | .\build.ps1 build
````

##### Installing

To install the typescript plugin use (Note, this will uninstall gauge-ts before installing the compiled version):

````
./build.sh | .\build.ps1 package
./build.sh | .\build.ps1 forceinstall
````

##### Creating the package

````
./build.sh | .\build.ps1  package
````
