/// <reference types="Cypress"/>

describe("API POST Testing",()=>{
  it.skip("hARD cODED",()=>{

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
  it("Dynamically Generated",()=>{

    const requestBody={
        tourist_name:Math.random().toString(5).substring(2),
        tourist_email:Math.random().toString(5).substring(2)+"@gmail.com",
        tourist_location:"Kathmandu"
    }
    cy.request({
        method:'POST',
        url:'http://restapi.adequateshop.com/api/Tourist',
        body:requestBody
    }).then((req)=>{
        expect(req.status).to.eq(201)
        expect(req.body.tourist_name).to.eq(requestBody.tourist_name)
        expect(req.body).has.property("tourist_location",requestBody.tourist_location)
    })
  })
})