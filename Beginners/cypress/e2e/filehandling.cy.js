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
    it('File Upload - Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile({filePath:'Capture.PNG',fileName:'Test.PNG'})
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it.only('File Upload - Drag and Drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#drag-drop-upload").attachFile('Capture.PNG',{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Capture.PNG')
        

    })
    it("Multiple Files Upload",()=>{

    })
    it("File Upload -Shadow Dom",()=>{

    })
})