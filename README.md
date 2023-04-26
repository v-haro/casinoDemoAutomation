Cypress Automated Tests for Casino Registration Page
This project contains Cypress automated tests for the user registration page of a casino website.

Requirements
To run the tests in this project, you'll need:

Node.js (version 12 or higher)
Cypress (version 8 or higher)
Installation
Clone this repository to your local machine.
Install the dependencies by running npm install.
Running the Tests
Start the Cypress Test Runner by running npm run cypress:open.
Click on the signup.cy.js file to run the tests.
The tests will open a new browser window and run automatically.
Test Cases
This project contains the following test cases for the registration page:

Create a User
This test case verifies that a user can be created by filling out the registration form and submitting it.

Email Already in Use
This test case verifies that an error message is displayed when a user tries to create another account with an email address that is already in use.

Test Results
After running the tests, you can view the results in the Cypress Dashboard. Follow these steps to generate a report:

Create an account on the Cypress Dashboard website.
Set the record environment variable to true by running export CYPRESS_RECORD_KEY=<your-record-key> in the terminal (replace <your-record-key> with your actual record key).
Re-run the tests by running npm run cypress:run.
The test results will be automatically uploaded to the Cypress Dashboard. You can view them by logging in to your account on the website.
That's it! If you have any questions or issues, please feel free to contact me.
