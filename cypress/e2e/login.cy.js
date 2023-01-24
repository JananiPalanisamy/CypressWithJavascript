import {loginPage} from '../pages/loginPage.cy.js'

const login = new loginPage()
describe ('all login tests', ()=>{

   it('Login Test', function(){
   
      // login.navigate('https://trytestingthis.netlify.app/')
      login.enterCredentials('test','test')
      login.clickLoginButton()
      cy.contains('Login Successful :)') 
      cy.contains('here').click()   
   })
   
   beforeEach(()=>
   {
      login.navigate('https://trytestingthis.netlify.app/')
      cy.log('Running beforeEach from inside describe block')
   })
   
   it.skip('Login with invalid username', function(){
      
     
      login.enterCredentials('test123','test')
      login.clickLoginButton()
      cy.on('window:alert', (txt)=>{
         expect(txt).to.be.equal('Wrong Credentials! Try again!')
      })
      // cy.contains('Login Successful :)') 
      // cy.contains('here').click()   
   })
   
   it('Login with invalid password', function(){
      
      // login.navigate('https://trytestingthis.netlify.app/')
      login.enterCredentials('test','test123')
      login.clickLoginButton()
      cy.on('window:alert', (txt)=>{
         expect(txt).to.be.equal('Wrong Credentials! Try again!')
   
      })
      // cy.contains('Login Successful :)') 
      // cy.contains('here').click()   
   })
   
})

beforeEach(()=>
{
   cy.log('Running beforeEachfrom outside describe block')
})

