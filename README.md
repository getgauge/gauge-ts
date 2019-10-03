# Gauge-Ts

[![Actions Status](https://github.com/bugdiver/gauge-ts/workflows/Node%20CI/badge.svg)](https://github.com/BugDiver/gauge-ts/actions)
[![codecov](https://codecov.io/gh/BugDiver/gauge-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/BugDiver/gauge-ts)
[![npm version](https://badge.fury.io/js/gauge-ts.svg)](https://badge.fury.io/js/gauge-ts)

This project adds typescript [language plugin](https://docs.gauge.org/latest/installation.html#language-runner) for [gauge](http://gauge.org).

The plugin is authored in [typescript](https://en.wikipedia.org/wiki/TypeScript).

## Getting started

Refer https://bugdiver.dev/gauge-ts

## Deveopement

#### Build from Source

##### Requirements
- [Gauge](https://gauge.org)
- [Node js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [JQ](https://stedolan.github.io/jq/) (for unix)


Running `build.sh`(*nix), or `.\build.ps1`(windwos/powershell) should give the list of all tasks available. Below sections detail some commonly used tasks.

##### Compiling

To compile typescript to commonjs:

````
./build.sh | .\build.ps1 build
````

##### Installing

To install the the typescript plugin use(Note, this will uninstall gauge-ts before installing the compiled version):

````
./build.sh | .\build.ps1 package
./build.sh | .\build.ps1 forceinstall
````

##### Creating distributable

````
./build.sh | .\build.ps1  package
````

New distribution details need to be updated in the dotnet-install.json file in  [gauge plugin repository](https://github.com/getgauge/gauge-repository) for a new verison update.




## Copyright

Copyright 2019 `BugDiver <vinayshankar00@gmail.com>`.
