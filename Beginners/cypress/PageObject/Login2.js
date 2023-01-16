//create class
class Login{
    //user defined method
    txtUsername="input[placeholder='Username']"
    txtPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    btnLogin=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    setUserName(Username){
        cy.get(this.txtUsername).type(Username);

    }
    setUserPassword(Password){
        cy.get(this.txtPassword).type(Password);
    }
    loginButton(){
        cy.get(this.btnSubmit).click()
    }
    verfiyLogin(){
        cy.get(this.btnLogin).should('have.text','Dashboard')
    }

}
export default Login; //for import into another file