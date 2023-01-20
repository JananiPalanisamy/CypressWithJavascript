import {loginPage} from '../pages/loginPage.cy.js'

const login = new loginPage()

it('Login Test', function(){
   
   login.navigate('https://trytestingthis.netlify.app/')
   login.enterCredentials('test','test')
   login.clickLoginButton()
    
})

