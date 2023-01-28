
describe('read write file tests', ()=>{

    // beforeEach(function(){
    //     cy.fixture('example.json').as('data')
    // })

    it('read file using fixture', ()=>{
        cy.fixture('example.json')
        .its('name').should('equals', 'hello')

        // cy.log(this.data.name)
    })

    it('read file using readFile function', ()=>{
        cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq','hello')
    })
    it('write file', ()=>{
        cy.writeFile('sample.txt', 'Hello writing file')
        cy.writeFile('sample.txt', 'hello i am janani')  //this will replace above txt
        cy.writeFile('sample.txt', '\nAdding new line using flag: a+', {flag: 'a+'})

        cy.readFile('sample.txt')
        .should('contain', 'janani')
    })

    it('write file giving path', ()=>{
        cy.writeFile('/Users/janani/Projects/CypressProject/cypress/Files/SampleWriteFile.txt', 'Writing in a file by giving path')
        cy.writeFile('/Users/janani/Projects/CypressProject/cypress/Files/SampleWriteFile.txt', '\nNew line', {flag: 'a+'})
    })
})