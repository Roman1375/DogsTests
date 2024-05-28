import {createNewUser} from "./reusableFunctions/createNewUser.cy";

describe('Тест на функціональність для перевірки на різних браузерах', () => {
    it('Правильне відображення', () => {
        cy.visit('https://dog.testoviydomen.fun/');
        cy.get('h1').should('have.text', 'Сухий корм для собак та зоотовари у магазині Dog.com.ua');
        cy.visit('https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/');
        cy.get('h1').should('include.text', 'Лікувальний корм для собак');
        cy.visit('https://dog.testoviydomen.fun/dostavka-i-oplata/');
    });

    it('Спрацьовування кнопок бокових меню', () => {
        cy.viewport(768, 1024);
        cy.visit('https://dog.testoviydomen.fun/');
        cy.get('#mobile_menu_toggle').click();
        cy.get('.sidenav').should('be.visible');
        cy.visit('https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/');
        cy.get('#left_menu_toggle').click({force: true});
        cy.get('#left_menu').should('be.visible');
    });

    it('Успішна реєстрація користувача', () => {
        createNewUser();
    });
});