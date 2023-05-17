# Playwright-ts-cucumber
The "playwright-ts-cucumber" project is a sample project that demonstrates how to use Playwright, TypeScript, and Cucumber for automated testing. It is hosted on GitHub and is available under the MIT license.

The project consists of several directories and files, including:

"features" directory: This directory contains feature files that describe the desired behavior of the application. Feature files use the Gherkin syntax, which is a plain-text language for specifying the behavior of software. Each feature file defines one or more scenarios that describe a specific feature or behavior of the application.

"step_definitions" directory: This directory contains TypeScript files that define the steps for each scenario in the feature files. Step definitions map the steps in the feature files to specific actions in the application, such as clicking a button or entering text in a form. Each step definition file corresponds to a feature file and defines the steps for all the scenarios in that file.

"utils" directory: This directory contains utility functions and classes that can be used in the step definitions. These utilities include functions for navigating to web pages, interacting with elements on a page, and handling errors.

"package.json" file: This file is used by npm to manage the project dependencies. It specifies the required dependencies, such as Playwright, Cucumber, and TypeScript, and their versions.

"tsconfig.json" file: This file specifies the TypeScript configuration for the project, including the compiler options, such as the target version of JavaScript and the output directory for compiled files.

"cucumber.js" file: This file is the configuration file for running tests with Cucumber. It specifies the path to the feature files, step definitions, and utilities, and sets up the environment for running the tests.

The project includes sample feature files and step definitions for testing a simple web application. The feature files describe scenarios such as navigating to a web page, entering text in a form, and verifying that the correct page is displayed. The step definitions implement the steps for each scenario using Playwright to interact with the web application.

To run the tests, the user can execute the command "npm test" in the terminal. This will run the tests using Cucumber and Playwright, and generate a report with the results.

Overall, the "playwright-ts-cucumber" project provides a good example of how to use Playwright, TypeScript, and Cucumber for automated testing. It demonstrates best practices for organizing test code, writing feature files, and defining steps, and can be easily adapted to suit the needs of different applications.

## Prerequisites
Node.js (v14 or higher)
## Installation
Clone the repository: ```git clone https://github.com/<your-username>/playwright-ts-cucumber.git ```

Navigate to the cloned repository: ``` cd playwright-ts-cucumber ```

Install dependencies: 
``` npm i ```

``` npm install npm i -D @playwright/test``` 
# install supported browsers
``` npx playwright install``` 

## Usage
To run tests, use the following command:
```
npm test 
```
This will run Cucumber tests with the environment set to UAT.


After the tests have completed, a HTML report will be generated and can be found in the reports folder.

## Scripts
test: Runs Cucumber tests with the environment set to UAT.
posttest: Generates a HTML report of the test results.
## Dependencies
@cucumber/cucumber: Cucumber framework.

@playwright/test: Playwright test runner.

cross-env: Sets environment variables.

dotenv: Loads environment variables from a .env file.

multiple-cucumber-html-reporter: Generates a HTML report of the test results.

ts-node: Allows TypeScript to be run in a Node.js environment.
## License
This project is licensed under the ISC License. See the LICENSE file for details.