// Import your Page Object classes

import RegistrationPage from "../page-objects/registrationPage"

// Define your test suite using Mocha's "describe" function

describe('Registration functionality', () => {

    beforeEach(() => {
        // Create an instance of your LoginPage object
        const registrationPage = new RegistrationPage()

        // Navigate to the login page
        registrationPage.visit()
        registrationPage.waitPopPupAndClose()

        // Press escape btn to close welcome popup
        registrationPage.pressABtn('esc')

    })

    it('should allow a user to make a registration in the page', () => {
        cy.fixture('registrationData').then((registrationData) => {

            // Create an instance of your LoginPage object
            const registrationPage = new RegistrationPage()

            //accept conditions
            registrationPage.aceptConditions()

            // fill formulary
            registrationPage.fillEmail(registrationData.email)
            registrationPage.fillPassword(registrationData.password)
            registrationPage.fillReenterPassword(registrationData.reenterPassword)
            registrationPage.clickNoBonusRadioBtn()
            registrationPage.clickSubmitBtn()

        })
    })


    it('validate if the registration email is already in use', () => {
        cy.fixture('registrationData').then((registrationData) => {

            // Create an instance of your LoginPage object
            const registrationPage = new RegistrationPage()

            //accept conditions
            registrationPage.aceptConditions()

            // fill formulary
            registrationPage.fillEmail(registrationData.email)
            registrationPage.fillPassword(registrationData.password)
            registrationPage.fillReenterPassword(registrationData.reenterPassword)
            registrationPage.clickNoBonusRadioBtn()
            registrationPage.clickSubmitBtn()

            //Incomplete because the popup with image puzzle validator appears before you can check the next step
            registrationPage.validateErrorWhenUserEmailExist()
            
        })
    })
})