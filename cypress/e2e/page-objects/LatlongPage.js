class LatlongPage {

  //navigate to latlong page
  visit() {
    cy.visit('https://www.latlong.net', { failOnStatusCode: false })

  }

  // Perform a search for each place
  performSearchOfPlace(place) {
    cy.get('#place').type(place)
    cy.get('#btnfind').click()
  }

  // Check if the element with the "Sorry, Your daily quota is over." text exists
  checkLatLong(lat,long){
  cy.contains('Sorry, Your daily quota is over.').then((element) => {
    if (element.length > 0) {
      // Skip the validation if the text is found
      return;
    }

    // Verify the latitude and longitude
    cy.get('#lat').should('have.value', lat)
    cy.get('#lng').should('have.value', long)
  })
}

// Clear the search field for the next iteration
clearFormulary(){cy.get('#place').clear()}
}
export default LatlongPage