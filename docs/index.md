# Gauge Typescript
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/BugDiver/gauge-ts/blob/master/LICENSE)
<a class="github-button" href="https://github.com/bugdiver/gauge-ts" data-icon="octicon-star" data-show-count="true" aria-label="Star bugdiver/gauge-ts on GitHub">Star</a>

A [typescript](https://www.typescriptlang.org/) runner for [Gauge](https://gauge.org).

## Description

This projects adds support for implementing your Gauge acceptance tests in typescript language. Here are the few motivations
* https://github.com/getgauge/gauge/issues/293
* https://github.com/getgauge/gauge-js/issues/187

## Features

Gauge Typescript allows you to use typescript [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) to implement your `steps` and `hooks`. The `decorators` in typescript is still a experimental feature but looking at the [number of issues/requests](https://github.com/microsoft/typescript/issues?utf8=%E2%9C%93&q=is%3Aissue+decorator++support+) about it seems like it will be official 🤞.

## Installation

### Pre-requisite

- [Gauge](https://docs.gauge.org/installing.html#installation) > v1.0.0
- [Node js](https://nodejs.org/en/) > v10.0.0
- [Npm](https://www.npmjs.com/) > v6.0.0


The plugin has two components which has to install to run a gauge typescript project.
The first component is in form of a gauge plugin which take care of create a gauge-ts project and starting the runner.
The 2nd component is a `npm` package which gives the API which the users will use to write there step/hook implementations. The second component will be install as part of `npm install` in your gauge  typescript project.

To install the first component

```bash
gauge install ts
```

or download the `zip` file from [Github Release](https://github.com/BugDiver/gauge-ts/releases) and run

```
gauge install ts -f {location_of_zip_file}
```

## Create a Project

Once you have installed the `gauge-ts` plugin, you can create a sample app. To verify your installation run

```bash
gauge -v
```
The output should contain

`ts (VERSION_OF_PLUGIN)`

Now you can run the following command to create a sample project in a empty dir (create a new one for your test project)
```bash
gauge init ts
```

## Run a Project

Once the initialization is done run `npm install` to get all the required dependencies.
Now you can run `gauge run specs` to run your project.
Open the project in your favorite editor and start adding some new tests.


## APIS

NOTE: All the classes containing step/hook implementations needs to be exported as `default`.

### Step



**Syntax**

```javascript
import { Step } from 'gauge-ts';
export default class StepImpl {

    @Step("Hello <world>")
    public async hello(world: string) {
      console.log(`Hello ${world}`);
    }

}

```

**aliases**
```javascript
import { Step } from 'gauge-ts';
export default class StepImpl {

    @Step(["Hello <world>", "Hi <world>"])
    public async hello(world: string) {
      console.log(`Hello ${world}`);
    }

}
```


### Hooks

#### Suite Hooks

```javascript
import { BeforeSuite, AfterSuite } from 'gauge-ts';
export default class StepImpl {

    @BeforeSuite()
    public async suiteSetup() {
      console.log("setup needs to done before running the suite");
    }

    @AfterSuite()
    public async cleanUp() {
      console.log("clean up needs to done after running the suite");
    }

}
```

#### Spec Hooks

```javascript
import { BeforeSpec, AfterSpec } from 'gauge-ts';
export default class StepImpl {

    @BeforeSpec()
    public async setup() {
      console.log("setup needs to done before running the spec");
    }

    @AfterSpec()
    public async cleanUp() {
      console.log("clean up needs to done after running the spec");
    }

}
```

#### Scenario Hooks

```javascript
import { BeforeScenario, AfterScenario } from 'gauge-ts';
export default class StepImpl {

    @BeforeScenario()
    public async setup() {
      console.log("setup needs to done before running the Scenario");
    }

    @AfterScenario()
    public async cleanUp() {
      console.log("clean up needs to done after running the Scenario");
    }

}
```

#### Step Hooks

```javascript
import { BeforeStep, AfterStep } from 'gauge-ts';
export default class StepImpl {

    @BeforeStep()
    public async setup() {
      console.log("setup needs to done before running the Step");
    }

    @AfterStep()
    public async cleanUp() {
      console.log("clean up needs to done after running the Step");
    }

}
```

#### Tagged hooks

Gauge allows to control the execution by running filtered hooks using `tags`.


```javascript
import { BeforeSpec } from 'gauge-ts';
export default class StepImpl {

    @BeforeSpec({tags: ["ready"]})
    public async setup() {
      console.log("setup needs to done only for spec tagged as ready");
    }

}
```

You can use operators as well to filter hooks


```javascript
import { BeforeSpec, BeforeScenario, Operator } from 'gauge-ts';
export default class StepImpl {

    @BeforeSpec({tags: ["ready", "done"], operator: Operator.And})
    public async setup() {
      console.log("setup needs to done only for spec tagged as ready and done");
    }

    @BeforeScenario({tags: ["complete", "critical"], operator: Operator.Or})
    public async setup() {
      console.log("cleanup needs to done only for scenarios tagged as ready or done");
    }

}
```

NOTE: `tags` are not applicable for `<Before | After>Suite` hooks.

### ExecutionContext

To get additional information about the current specification, scenario and step executing, an additional ExecutionContext parameter can be added to the hooks method.


```javascript
import {
  BeforeStep, AfterStep,
  ExecutionContext, Scenario
  , StepInfo } from 'gauge-ts';

export default class StepImpl {

    @BeforeStep()
    public async setup(context: ExecutionContext) {
      let scenario: Scenario = context.getCurrentScenario() as Scenario;
      let name: string = scenario.getName() as string;  // this need to be done because the name can be null also.
      console.log("setup needs to done before running the Step");
    }

    @AfterStep()
    public async cleanUp(context: any) {
      let step: StepInfo = context.getCurrentStep() as StepInfo;
      let name: string = step.getText() as string;  // this need to be done because the name can be null also.
      console.log("clean up needs to done after running the Step");
    }

}

```

### Data Stores

Data (Objects) can be shared in steps defined in different classes at runtime using DataStores exposed by gauge-ts.

There are 3 different types of DataStores based on the life cycle of when it gets cleared.

#### Suite Data Store

This data store keeps values added to it during the life cycle of entire suite execution. Values are cleared after entire suite execution.

WARNING: `SuiteStore` is not advised to be used when executing specs in parallel. The values are not retained between parallel streams of execution.

```javascript
// import factory
import { DataStoreFactory, DataStore } from 'gauge-ts';

// Adding value
let suiteStore: DataStore = DataStoreFactory.getSuiteDataStore();
suiteStore.put("element-id", "455678");

// Fetching value
let suiteStore: DataStore = DataStoreFactory.getSuiteDataStore();
String elementId = suiteStore.get("element-id") as string;

```

#### Spec Data Store

This data store keeps values added to it during the life cycle of the specification execution. Values are cleared after every specification executes.

```javascript
// import factory
import { DataStoreFactory, DataStore } from 'gauge-ts';

// Adding value
let specStore: DataStore = DataStoreFactory.getSpecDataStore();
specStore.put("element-id", "455678");

// Fetching value
let specStore: DataStore = DataStoreFactory.getSpecDataStore();
String elementId = specStore.get("element-id") as string;

```

#### Scenario Data Store

This data store keeps values added to it in the life cycle of the scenario execution. Values are cleared after every scenario executes.

```javascript
// import factory
import { DataStoreFactory, DataStore } from 'gauge-ts';

// Adding value
let scenarioStore: DataStore = DataStoreFactory.getSpecDataStore();
scenarioStore.put("element-id", "455678");

// Fetching value
let scenarioStore: DataStore = DataStoreFactory.getSpecDataStore();
String elementId = scenarioStore.get("element-id") as string;

```

### Custom Screenshots

* By default gauge captures the display screen on failure if this feature has been enabled.
If you need to take CustomScreenshots (using webdriver for example) because you need only a part of the screen captured, this can be done by assigning a `CustomScreenshotGrabber` to `gauge-ts`

```javascript
// import CustomScreenshotGrabber
import { CustomScreenGrabber } from 'gauge-ts';

export default class ScreenGrabber {
    @CustomScreenGrabber()
    public async takeScreenshot(): Uint8Array {
      // return a Unint8Array
      return new Uint8Arrat();
    }
}

```

DEPRECATION NOTICE: `CustomScreenshotGrabber` has been deprecated since gauge-ts v0.0.5, please use `CustomScreenshotWriter` as mentioned below

```javascript
import { CustomScreenshotWriter } from 'gauge-ts';
import { join, basename } from 'path';

const { screenshot } = require('taiko');

export default class ScreenshotWriter {
  @CustomScreenshotWriter()
  public async foo(): Promise<string> {
    const screenshotFilePath = join(
      process.env['gauge_screenshots_dir'],
      `screenshot-${process.hrtime.bigint()}.png`,
    );
    await screenshot({ path: screenshotFilePath });
    return basename(screenshotFilePath);
  }
}
```


### Custom messages in reports

Custom messages/data can be added to execution reports using the below API from the step implementations or hooks.

These messages will appear under steps in the execution reports.

```javascript
// import the class
import { Gauge } from 'gauge-ts';

// write messages
Gauge.writeMessage("Custom message for report");
```

### Custom screenshots in reports

Custom screenshot can be added to execution reports using the below API from the step implementations or hooks.

These screenshots will appear under steps in the execution reports.
```javascript
// import the class
import { Gauge } from 'gauge-ts';

// write messages
await Gauge.captureScreenshot();
```

### Continue on Failure

The default behavior in gauge is to break execution on the first failure in a step. So, if the first step in a scenario fails, the subsequent steps are skipped. While this works for a majority of use cases, there are times when you need to execute all steps in a scenario irrespective of whether the previous steps have failed or not.

To address that requirement, gauge provides a way for language runners to mark steps as recoverable, depending on whether the step implementation asks for it explicitly. Each language runner uses different syntax, depending on the language idioms to allow a step implementation to be marked to continue on failure.
```javascript
// import type
import { ContinueOnFailure } from 'gauge-ts';

// The ``@ContinueOnFailure`` decorator tells Gauge to continue executing other
// steps even if the current step fails.

export default class StepImplementation {
    @ContinueOnFailure
    @Step("Say <greeting> to <product name>")
    public async helloWorld(String greeting, String name) {
        // If there is an error here, Gauge will still execute next steps
    }
}

```

Continue on Failure can take an optional parameter to specify the list of error classes on which it would continue to execute further steps in case of failure. This is currently supported only with the following runners.

```javascript
// import type
import { ContinueOnFailure } from 'gauge-ts';
export default class StepImpl {
    @ContinueOnFailure(['AssertionError', 'CustomError'])
    @Step("hello")
    public async sayHello() {
      // code here
    }

    @ContinueOnFailure(['AssertionError'])
    @Step("hello")
    public async sayHello() {
      // code here
    }

    @ContinueOnFailure
    @Step("hello")
    public async sayHello() {
      // code here
    }
}
```

In case no parameters are passed to @ContinueOnFailure, on any type of error it continues with execution of further steps by default (AssertionError).

This can be used to control on what type of errors the execution should continue, instead of just continuing on every type of error. For instance, on a RuntimeException it’s ideally not expected to continue further. Whereas if it’s an assertion error, it might be fine to continue execution.

NOTE:
* Continue on failure comes into play at post execution, i.e. after the step method is executed. If there is a failure in executing the step, ex. parameter count/type mismatch, gauge will not honour the ContinueOnFailure flag.

* Continue on failure does not apply to hooks. Hooks always fail on first error.

* Step implementations are still non-recoverable by default and Gauge does not execute subsequent steps upon failure. To make a step implementation continue on failure, it needs to be explicitly marked in the test code.

* There is no way to globally mark a test run to treat all steps to continue on failure. Each step implementation has to be marked explicitly.

* If an implementation uses step aliases, marking that implementation to continue on failure will also make all the aliases to continue on failure. So, if a step alias is supposed to break on failure and another step alias is supposed to continue on failure, they need to be extracted to two different step implementations.

### Refactoring

Gauge allows you to rephrase a step across the project. To rephrase a step run:
```bash
gauge refactor "old step <name>" "new step name"
```

Here < and > are used to denote parameters in the step. Parameters can be added, removed or changed while rephrasing.

This will change all spec files and code files (for language plugins that support refactoring).

For example,

Let’s say we have the following steps in our spec file:

```
* create user "john" with id "123"
* create user "mark" with id "345"
```

Now, if we now need to add an additional parameter, say last name, to this step we can run the command:

```bash
gauge refactor "create user <name> with id <id>" "create user <name> with <id> and last name <watson>"
```

This will change all spec files to reflect the change.
```
* create user "john" with id "123" and last name "watson"
* create user "mark" with id "345" and last name "watson
```


## Editor (authoring) and Debugging Support

Gauge supports [LSP](https://blog.getgauge.io/gauge-and-the-language-server-protocol-c56fbcfba177) which can be used to used to integrate Gauge with any (if it supports) LSP. Gauge has it's official plugin for [Visual Studio Code](https://github.com/getgauge/gauge-vscode/blob/master/README.md) which allows author/debug to write their tests in multiple language.

Gauge-Ts follows the protocol and implements the apis required by gauge to support a language. Install the `gauge` plugin for VS Code for a rich editing and debugging support with Gauge and Typescript.


## Contact & Support

- Create a [Github issue](https://github.com/bugdiver/gauge-ts/issues) for bug reports, feature requests, or questions
- Add a ⭐️ [star on GitHub](https://github.com/bugdiver/gauge-ts) or ❤️ [tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fbugdiver%2Fgauge-ts&via=bugdiverr&hashtags=getgauge,automation,bdd,typescript) to support the project!

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/bugdiver/gauge-ts/blob/master/LICENSE) for details.

Copyright (c) Vinay Shankar Shukla ([@BugDiver](https://github.com/bugdiver))

<!-- GitHub Buttons -->

<script async defer src="https://buttons.github.io/buttons.js"></script>
