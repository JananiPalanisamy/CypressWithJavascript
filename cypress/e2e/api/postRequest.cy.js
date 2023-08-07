

describe('POST request block', ()=>{

Cypress.config('baseUrl', 'https://reqres.in/api')

    it('POST 1', ()=>{
        cy.request({
            'METHOD':'POST',
            'url': '/register',
            body:{
                "email": "post@reqres.in",
                "password": "post"
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })



    it('POST 2', ()=>{

        const requestBody = {
            "email": "post123@reqres.in",
            "password": "post"
        };

        cy.request('/register', requestBody)
            .then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})