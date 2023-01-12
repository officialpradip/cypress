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
    it("Pagination",()=>{
        let totalpages
        //fnd totle numbe rof pages
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext=e.text() //extract value i.e Showing 1 to 10 of 8968 (897 Pages)
            totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log("Total no of pages===>>",totalpages)
        })

    })
    it.only("Reading Pagination data",()=>{
        
    })
})