/// <reference types="Cypress"/>

describe("API POST Testing",()=>{
  it("hARD cODED",()=>{

    const requestBody={
        tourist_name:"Pradip Thapa",
        tourist_email:"pradip213@tourist.com",
        tourist_location:"Kathmandu"
    }
    cy.request({
        method:'POST',
        url:'http://restapi.adequateshop.com/api/Tourist',
        body:requestBody
    }).then((req)=>{
        expect(req.status).to.eq(201)
        expect(req.body.tourist_name).to.eq("Pradip Thapa")
        expect(req.body).has.property("tourist_location","Kathmandu")
    })
  })
})