/// <reference types="Cypress"/>

describe("API POST Testing",()=>{
    const requestBody={
        tourist_name:"Pradip Thapa",
        tourist_email:"pradip@tourist.com",
        tourist_location:"Kathmandu"
    }

    cy.request({
        method:'POST',
        url:'http://restapi.adequateshop.com/api/Tourist',
        body:requestBody
    }).then((req)=>{
        expect(req.status).to.eq(200)
    })
})