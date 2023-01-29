

describe('file upload tests', ()=>{

    it('file upload from fixture folder', ()=>{

        cy.visit('https://filebin.net/')
        cy.get('#fileField').attachFile('example.json')
    })

    it('file upload from custom folder', ()=>{
        cy.visit('https://filebin.net/')
        cy.get('#fileField').attachFile('../Files/SampleWriteFile.txt')
    })
})