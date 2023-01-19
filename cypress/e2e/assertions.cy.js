/// <reference types="cypress"/>

//implicit assertion
it('implicit assertion', ()=>{
    cy.visit('https://example.cypress.io/')
    // cy.wait(2000)
    cy.contains('get').click()

    cy.get('#query-btn', {timeout: 2000})  //timeout : wait untill it fails
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.enabled', 'Button')

    cy.get('#query-btn').invoke('attr','id')
        .should('equal', 'query-btn')
    
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
        .and('be.enabled', 'Button')

    //explicit assertion
    //expect
    expect(true).to.be.true

    let name = 'Jan'
    expect(name).to.be.equal('Jan')
    
    //assert
    assert.equal(4,4,'Not equal')
    assert.strictEqual(4,'4', 'Not strictly equal')

})



