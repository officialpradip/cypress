/// <reference types="Cypress"/>
describe("Create Post Testing",()=>{
    let accessToken="904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66";
    it("Create Post",()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/posts',
            headers:{
                "Authorization":"Bearer" + accessToken
            },
            body:{
                "user_id":687509,
                "title":"Demo Test",
                "body":"This is my first post"

            }
        }).then((req)=>{
            expect(req.status).to.be(401)
            expect(req.body).has.property("title","Demo Test")

        })
    })
})