/// <reference types="Cypress" />

// it('Navigate to TODO APP',()=>{
//     cy.visit('http://todomvc-app-for-testing.surge.sh/')

//     // cy.get('.new-todo',{timeout:6000}).type("Morning Walk{enter}")
//     // cy.get('.new-todo',{timeout:6000}).type("Reading{enter}")
    
    
//     // validation
//     // cy.get('label').should('have.text',"Morning Walk")
//     // cy.get('.toggle').should('not.be.checked')
//     // cy.get('.toggle').click()
//     // cy.get('label').should('have.css','text-decoration-line','line-through')
//     // cy.contains('C').click()
//     // cy.get('.clear-completed').should('not.have.descendants','li').click()
// })
//group test using describe function
//it.only for first test run
describe("to-do actions",()=>{
    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type("Learning Python{enter}")
        cy.get('.new-todo').type("Learning JavaScript{enter}")
        cy.get('.todo-list li:nth-child(2) .toggle').click()
    
    })
    it("should filter 'Active' Todos",()=>{
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length',2)
        
        
    })
    it("should filter 'Completed' Todos",()=>{
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',2)
        
        
    })
    it("should filter 'All' Todos",()=>{
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length',2)
        
        
    })
    
    
    
   
    })