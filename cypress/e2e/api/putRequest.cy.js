


it('PUT', ()=>{

    const requestBody = {
        "name": "morpheus",
        "job": "zion resident"
    };

    cy.request('PUT', 'https://reqres.in/api/users/2', requestBody)
        .then((response)=>{
        expect(response.status).to.eq(200)
    })
})