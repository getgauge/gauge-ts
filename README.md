# Gauge-ts [WIP]

This project is still in progress. Not all the features works as of now.
Look at the TODO for pending tasks.

This project adds typescript [language plugin](https://docs.gauge.org/latest/installation.html#language-runner) for [gauge](http://gauge.org).

The plugin is authored in [typescript](https://en.wikipedia.org/wiki/TypeScript).

## Getting started

### Pre-requisite

- [Gauge](https://gauge.org)
- [Node js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)


### Installation

```
gauge install ts
```

### Create a gauge-dotnet project

```
gauge init ts
```

### Run tests

```
gauge run specs
```

### Alternate Installation options

#### Install specific version
* Installing specific version
```
gauge install ts --version 0.0.1
```

#### Offline installation

* Download the plugin from [Releases](https://github.com/getgauge/gauge-ts/releases)
```
gauge install ts --file gauge-ts-0.0.1.zip
```



#### Build from Source

Currently only available for *nix

##### Requirements
- [Gauge](https://gauge.org)
- [Node js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [JQ](https://stedolan.github.io/jq/) (for unix)


Running `build.sh` should give the list of all tasks available. Below sections detail some commonly used tasks.

##### Compiling

To build the project dlls:

````
./build.sh build
````

##### Installing

To install the the typescript plugin use(Note, this will uninstall gauge-ts before installing the compiled version):

````
./build.sh forceinstall
````

##### Creating distributable

````
./build.sh package
````

New distribution details need to be updated in the dotnet-install.json file in  [gauge plugin repository](https://github.com/getgauge/gauge-repository) for a new verison update.
