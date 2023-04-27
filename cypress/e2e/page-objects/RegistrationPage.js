class RegistrationPage {

  //navigate to registration page
  visit() {
    cy.visit('https://demo.casino/user/registration', { failOnStatusCode: false })

  }

  //wait until popup apears and close
  waitPopPupAndClose() { cy.get('.mfp-close', { timeout: 10000 }).should('be.visible').click(); }

  // Press escape btn to close welcome popup
  pressABtn(btn) {
    cy.get('body').type('{' + btn + '}')
  }

  //acept conditions
  aceptConditions() { cy.get('label[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]').click(); }


  fillEmail(email) { cy.get('[data-test="input-email"]').type(email) }


  fillPassword(password) { cy.get('[data-test="input-password"]').type(password) }


  fillReenterPassword(reenterPassword) { cy.get('[data-test="input-password_confirmation"]').type(reenterPassword) }


  clickNoBonusRadioBtn() { cy.get(':nth-child(2) > .special-radio__label').click() }


  clickSubmitBtn() { cy.get('[data-test="control-submit"] > span').click() }


  validateErrorWhenUserEmailExist() {cy.get('[data-test="error-email"]').should('be.visible').should('contain', 'Invalid email address'); }
}
export default RegistrationPage