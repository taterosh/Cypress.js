
describe('Тестируем форму логина', function () {

   it('Позитивный тест авторизации', function () {
   	cy.visit('https://login.qa.studio/');
   	cy.get('#mail').type('german@dolnikov.ru');
   	cy.get('#pass').type('iLoveqastudio1');
   	cy.get('#loginButton').click();
   	cy.get('#messageHeader').contains('Авторизация прошла успешно');
   	cy.get('#exitMessageButton > .exitIcon');
   })
   
      it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('taterosh@gmail.com');
      cy.get('#restoreEmailButton').click();
      cy.get('#exitMessageButton > .exitIcon');
      cy.contains('Успешно отправили пароль на e-mail');
   })

     it('Негативный тест авторизации с неправильным паролем', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio16');
      cy.get('#loginButton').click(); 
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon');
   })

     it('Негативный тест авторизации с неправильной почтой', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('taterosh@gmail.com');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click(); 
      cy.contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon');
   })

     it('Негативный тест валидации', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click(); 
      cy.contains('Нужно исправить проблему валидации');
   })

      it('Привидение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click(); 
         cy.get('#exitMessageButton > .exitIcon');
         cy.contains('Авторизация прошла успешно');
   })
})



