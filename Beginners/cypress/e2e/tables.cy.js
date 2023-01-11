/// <reference types="Cypress"/>

describe("Table Cypress",()=>{
    beforeEach("Login First",()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo{enter}')
        //alert
        cy.get(".btn-close").click()
        cy.wait(2000)
        cy.get("#menu-customer").click()
        cy.get("#menu-customer>ul>li:first-child").click() //customer child/sub items
        
        
    })
    it("check number of rows and columns",()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length',10)
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length',7)

    })
    it("check data for particular cell i.e row and colum",()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)').contains('princytrainings4@gmail.com')
    })
    it("Read all data from first page",()=>{
        cy.get(".table.table-bordered.table-hover>tbody>tr").each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })

    })
})