# Playwright-ts-cucumber
This is a test automation framework built with Playwright, Cucumber, and TypeScript.

## Prerequisites
Node.js (v14 or higher)
## Installation
Clone the repository: ```git clone https://github.com/<your-username>/playwright-ts-cucumber.git ```
Navigate to the cloned repository: ``` cd playwright-ts-cucumber ```
Install dependencies: ``` npm install ```
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