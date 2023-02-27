///<reference types="Cypress"/>
describe("Create New User Testing",()=>{
   // let accessToken="904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
    it("Create User",()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization':"Bearer 904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
            },
            body:{
                "name":'Pradip Thapa',
                "email":'try123@gmail.com',
                "gender":"Male",
                "status":"active"

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email','try123@gmail.com')
        })
    })
})