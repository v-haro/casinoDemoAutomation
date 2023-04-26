# Cypress Signup Test

This project contains automated test cases for the Signup functionality of the following page:

- https://demo.casino/user/registration

## Prerequisites

- Node.js (v14.16.0 or later)
- Git
- Chrome or Firefox browser installed

## Setup

1. Clone the repository:

git clone <repository-url>

markdown
Copy code

2. Install dependencies:

cd cypress-signup-test
npm install

markdown
Copy code

## Running the Tests

1. Open Cypress:

npm run cy:open

sql
Copy code

2. In the Cypress window, click on `signup.cy.js` to run the test suite.

## Test Cases

The test suite includes the following test cases:

### Create a User

This test case verifies if the user is able to create a new account successfully in the Signup page.

### Validate Error When User Email Already Exists

This test case verifies if the system displays an error message when a user tries to create another account with an email that already exists in the system.

## Test Report

The test results are automatically recorded in the Cypress Dashboard when running tests locally. In order to generate the test report, you need to:

1. Log in to the Cypress Dashboard:

npm run cy:dashboard:login

csharp
Copy code

2. Run the test suite with record option:

npm run cy:run

css
Copy code

3. After the tests finish running, go to the Cypress Dashboard to view the test results:

npm run cy:dashboard:open

vbnet
Copy code

For more information on how to use the Cypress Dashboard, please refer to the official documentation: https://docs.cypress.io/guides/dashboard/introduction
