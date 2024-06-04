# Gauge-Ts

This project adds Typescript [language plugin](https://docs.gauge.org/latest/installation.html#language-runner) for [gauge](http://gauge.org).

The plugin is authored in [typescript](https://en.wikipedia.org/wiki/TypeScript).

## Development

#### Build from Source

##### Requirements
- [Gauge](https://gauge.org)
- [Node js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [JQ](https://stedolan.github.io/jq/) (for unix)


Running `build.sh`(*nix), or `.\build.ps1`(windows/powershell) should give the list of all tasks available. Below sections detail some commonly used tasks.

##### Compiling

To compile Typescript to commonjs:

````
./build.sh | .\build.ps1 build
````

##### Installing

To install the the typescript plugin use (Note, this will uninstall gauge-ts before installing the compiled version):

````
./build.sh | .\build.ps1 package
./build.sh | .\build.ps1 forceinstall
````

##### Creating the package

````
./build.sh | .\build.ps1  package
````
