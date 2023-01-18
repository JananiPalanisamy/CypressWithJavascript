/// <reference types="cypress"/>


it('Navigate to google homepage positive', ()=>{

    cy.visit('https://google.com')
    cy.get('.gLFyf').type("cypress{enter}")
    cy.wait(3000) 
    // cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()

    cy.contains('Videos').click()

})

it('Navigate to google homepage negative', ()=>{

    cy.visit('https://google.com')
    cy.get('.gLFy', {timeout:6000}).type("cypress{enter}")
    cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()

})

it.only("Login orangeHRM", function(){

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123")
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()
    
})