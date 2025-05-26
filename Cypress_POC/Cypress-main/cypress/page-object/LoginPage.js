class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
  };

  visitPage() {
    cy.visit("/");
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  verifyErrorMessage(message) {
    cy.contains(message).should("be.visible");
  }

  wrongUserAndPassword(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
    }
}

export const loginPage = new LoginPage();
