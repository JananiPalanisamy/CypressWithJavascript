

describe('Get Request', ()=>{

    it('GET 1', ()=> {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response)=>{
                expect(response).to.have.to.be.property('status',200)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data').length(6)
                expect(response.body.data).to.have.length(6)
            })
           
    })

    it('GET 2', ()=> {
        cy.request('GET', 'https://reqres.in/api/users?page=2').as('user_list')

        cy.get('@user_list')
            .should((response)=>{
                expect(response).to.have.to.be.property('status',200)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data').length(6)
            })
               
           
    })

    it('GET 3', ()=> {
        cy.request({
            'method':'GET',
            'url': 'https://reqres.in/api/users?page=2',
            headers:{
                'Content-Type':'application/json',
                'key1':'value1'
            },
            auth:{
                "username":"name",
                "token":"token"
            }
        })
        .then((response)=>{
                expect(response).to.have.to.be.property('status',200)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data').length(6)
            })
               
        })

})