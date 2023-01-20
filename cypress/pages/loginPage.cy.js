export class loginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    /**
     * This method will go to the testing website
     */
    navigate(url)
    {
        cy.visit(url)
    }

    /**
     * This method enters the username and password
     */
    enterCredentials(username, password){
        cy.get(this.loginPage_username).type(username)
        cy.get(this.loginPage_password).type(password)
    }

    /**
     * This method will click on login button
     */
    clickLoginButton()
    {
        cy.get(this.loginPage_loginButton).click()
    }

}