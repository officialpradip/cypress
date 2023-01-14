/// <reference types="Cypress"/>

// Hooks provided by cypress
// before 
// after
// beforeEach -- executed multiple times before it block
// afterEach -- executed multiple times after it block

describe("hooks and tags",()=>{
    before("Before starting all",()=>{
        cy.log("=======Lunch App====")
    })
    after("After completing all",()=>{
        cy.log("=======After success Lunch App====")
    })

    beforeEach("Before Each",()=>{
        cy.log("=======Logging====")
    })
    afterEach("After Each",()=>{
        cy.log("=======Log Out====")
    })

    it("search",()=>{
        cy.log("====searching====")

    })
    it("advance search",()=>{
        cy.log("====advance searching====")
        
    })
    it("listing products",()=>{
        cy.log("====listing products====")
        
    })
})