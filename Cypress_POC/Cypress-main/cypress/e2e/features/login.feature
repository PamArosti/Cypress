Feature: Página de Login Local
  Valida o funcionamento da interface de login renderizada localmente.

  Background:
    Given que estou na tela de login

  Scenario: A tela de login deve conter os campos esperados
    Then o campo de usuário deve estar visível
    And o campo de senha deve estar visível
    And o botão de login deve conter o texto "Entrar"

  Scenario: Usuário realiza login com sucesso
    When preencho o usuário com "admin" e a senha com "123456"
    And clico no botão de login
    Then a página deve exibir a mensagem "Login realizado com sucesso"

  Scenario: Login com credenciais inválidas
    When preencho o usuário com "teste" e a senha com "errada"
    And clico no botão de login
    Then a página deve exibir a mensagem "Usuário ou senha incorretos"
