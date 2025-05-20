import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../page-object/LoginPage";

Given("Acessar a página de login do saucelabs - tag demo", () => {
  loginPage.visitPage()
});

When("Um usuário insere o nome de usuário {string}, a senha {string} e clica no botão de login - tag demo", (username,password) => {
  loginPage.submitLogin(username,password)
});

When("Um usuário fornece credenciais incorretas e clica no botão de login - tag demo", (table) => {
  table.hashes().forEach((row) => {
    loginPage.submitLogin(row.username, row.password)
  });
});

Then("a url conterá o subdiretório inventory - tag demo", () => {
  loginPage.verifyPage()
});

Then("A mensagem de erro {string} é mostrada - tag demo", (errorMessage) => {
  loginPage.verifyErrorMessage(errorMessage)
});
