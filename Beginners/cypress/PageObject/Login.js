//create class
class Login{
    //user defined method
    setUserName(Username){
        cy.get("input[placeholder='Username']").type(Username);

    }
    setUserPassword(Password){
        cy.get("input[placeholder='Password']").type(Password);
    }
    loginButton(){
        cy.get("button[type='submit']").click()
    }
    verfiyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    }

}
export default Login; //for import into another file