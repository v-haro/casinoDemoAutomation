// Import your Page Object classes

import LatlongPage from "../page-objects/LatlongPage"

// Define your test suite using Mocha's "describe" function

describe('LatLongPage functionality', () => {

    beforeEach(() => {
        // Create an instance of your LoginPage object
        const latlongPage = new LatlongPage()

        // Navigate to the login page
        latlongPage.visit()

    })

    it('should allow a user to find the latitude and longitude of a place', () => {
        cy.fixture('latlongData').then((testdata) => {
            testdata.forEach((placeData) => {
                // Create an instance of your LoginPage object
                const latlongPage = new LatlongPage()

                // Perform a search for each place
                latlongPage.performSearchOfPlace(placeData.place);

                // Check if the element with the "Sorry, Your daily quota is over." text exists
                latlongPage.checkLatLong(placeData.latitude,placeData.longitude)

                // Clear the search field for the next iteration
                latlongPage.clearFormulary()

            })
        })
    })

    it('should receive a 200 response for CDN Cookie Law web service', () => {
        cy.request('GET', 'https://cdn.cookielaw.org/consent/37a6175c-5d3d-4754-a4c7-9f2d7111ebb4/37a6175c-5d3d-4754-a4c7-9f2d7111ebb4.json')
          .its('status')
          .should('equal', 200)
          .catch((error) => {
            throw new Error(`Failed to receive a 200 response: ${error.message}`);
          })
      })
    
      it('should receive a 200 response for HBWrapper web service', () => {
        cy.request('POST', 'https://cat2.hbwrapper.com/')
          .its('status')
          .should('equal', 200)
          .catch((error) => {
            throw new Error(`Failed to receive a 200 response: ${error.message}`);
          })
      })
    
      it('should receive a 200 response for Amazon Adsystem (aps-csm) web service', () => {
        cy.request('GET', 'https://c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js')
          .its('status')
          .should('equal', 200)
          .catch((error) => {
            throw new Error(`Failed to receive a 200 response: ${error.message}`);
          })
      })
    
      it('should receive a 200 response for Amazon Adsystem (cdn) web service', () => {
        cy.request('GET', 'https://c.amazon-adsystem.com/cdn/prod/config?src=600&u=https%3A%2F%2Fwww.latlong.net&pubid=1ad7261b-91ea-4b6f-b9e9-b83522205b75')
          .its('status')
          .should('equal', 200)
          .catch((error) => {
            throw new Error(`Failed to receive a 200 response: ${error.message}`);
          })
      })
    

})

