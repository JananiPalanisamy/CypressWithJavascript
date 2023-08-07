import ProductsPage from '../pages/addToCartPage.cy.js'
/// <reference types = 'cypress'/>

describe('Test Suite - E-Commerce Tests', () => {

    let jsonData;


    before('Read Fixtures', () => {
        cy.fixture("addToCart").then(function (data) { jsonData = data })
    })

    beforeEach('Visit url', () => {
        cy.visit(Cypress.env("baseURL"));
    })

    it.only('Verify Tax for products', () => {

    })

    it('Add To cart', () => {
        cart.clickProduct('MacBook')
        cart.clickAddToCartButton()
        cart.getText().should('contain', 'Success')
        expect(cart.getText()).to.contain('Success')
        console.log(cart.getText())
    })

})
