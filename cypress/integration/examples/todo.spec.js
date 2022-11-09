/// <reference types="Cypress" />

it('Navigate to TODO APP',()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type("Morning Walk{enter}")
})