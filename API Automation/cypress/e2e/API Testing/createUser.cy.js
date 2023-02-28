///<reference types="Cypress"/>

const Jsondata=require('../../fixtures/createUser') //from fixtures

describe("Create New User Testing",()=>{
   // let accessToken="904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
   let randomEmail=""
   let randomText=""
    it("Create User",()=>{
        var emailpattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(var i=0;i<9;i++){
            randomText+=emailpattern.charAt(Math.floor(Math.random()*emailpattern.length));
            randomEmail=randomText + "@gmail.com";

        }
        //other way where cy.request goes inside cy.fixture
        // cy.fixture('createUser').then((Jsondata)=>{
        //     cy.request({

        //     })
        // })
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization':"Bearer 904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
            },
            body:{
                "name":Jsondata.name,
                "email":randomEmail,
                "gender":Jsondata.gender,
                "status":Jsondata.status

            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email',randomEmail)
        }).then((res)=>{
            //get call after user created
            const userId=res.body.id;
            cy.log("create user id is :::"+ userId)
            cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+userId,
            headers:{
                'Authorization':"Bearer 904f350af861df3a884c4f80b4d96cdbc12e18b1df2a6b3f2461559148c65e66"
            }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id',userId)
                expect(res.body).has.property('email',randomEmail)
            })
        })
    })
})