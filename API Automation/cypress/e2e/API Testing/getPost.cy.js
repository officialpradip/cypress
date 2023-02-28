/// <reference types="Cypress"/>
describe("Get Post Testing",()=>{
    let accessToken="904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
    it("Get All Post",()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/posts',
            headers:{
                "Authorization": "Bearer" + accessToken
            }
        }).then((req)=>{
            expect(req.status).to.eq(200)
            
        })

    })
})