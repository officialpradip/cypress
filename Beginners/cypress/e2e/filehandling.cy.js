/// <reference types="Cypress"/>
import 'cypress-file-upload'
//install plugin using : npm install --save–dev cypress-file-upload
describe("File Handling",()=>{
    it('Single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile('Capture.PNG')
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        

    })
    it.only('File Upload - Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile({filePath:'Capture.PNG',fileName:'Test.PNG'})
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it('File Upload - Drag and Drop',()=>{

    })
    it("Multiple Files Upload",()=>{

    })
    it("File Upload -Shadow Dom",()=>{

    })
})