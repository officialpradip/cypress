/// <reference types="Cypress" />

it('Navigate to TODO APP',()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo',{timeout:6000}).type("Morning Walk{enter}")
    cy.get('.toggle').click()
    cy.contains('C').click()
})