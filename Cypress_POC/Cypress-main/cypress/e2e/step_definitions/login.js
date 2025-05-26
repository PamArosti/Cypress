import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../page-object/LoginPage";

Given("que estou na tela de login", () => {
  loginPage.visitPage();
});

Then("o campo de usuário deve estar visível", () => {
  cy.get('input[name="username"]').should("be.visible");
});

Then("o campo de senha deve estar visível", () => {
  cy.get('input[name="password"]').should("be.visible");
});

Then("o botão de login deve conter o texto {string}", (text) => {
  cy.get('button[type="submit"]').should("contain.text", text);
});

When("preencho o usuário com {string} e a senha com {string}", (username, password) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
});

Then("clico no botão de login", () => {
  loginPage.clickLogin();
});

Then("a página deve exibir a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
  cy.get("body").should("contain.text", mensagem);
});

When('preencho o usuário com um dado errado {string} e a senha com {string}', (usuario, senha) => {
    loginPage.wrongUserAndPassword(usuario, senha);
});