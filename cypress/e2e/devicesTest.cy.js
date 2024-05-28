import {makeOrder} from "./reusableFunctions/makeOrder.cy";
import {createNewUser} from "./reusableFunctions/createNewUser.cy";

describe('Тестування на різних пристроях', () => {
    const viewports = [
        { device: 'Комп`ютер', width: 1920, height: 1080 },
        { device: 'Ноутюук', width: 1366, height: 768 },
        { device: 'Планшет', width: 768, height: 1024 },
        { device: 'Мобільний пристрій', width: 360, height: 640 }
    ];

    const pages = ['https://dog.testoviydomen.fun/', 'https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/', 'https://dog.testoviydomen.fun/dostavka-i-oplata/', 'https://dog.testoviydomen.fun/catalog/vitamini-ta-kharchovi-dobavki-dlia-sobak/practik-superfood-pechinkovii-sous-dlia-sobak-ta-kotiv/?variant=30LSS942'];

    viewports.forEach(viewport => {
        pages.forEach(page => {
            it(`Перевірка відображення на ${viewport.device} ${page}`, () => {
                cy.viewport(viewport.width, viewport.height);
                cy.visit(page);
                cy.get('h1').each(($h1) => {
                    cy.wrap($h1).should('exist').should('be.visible');
                });
            });
        });
        it(`перевірка функціональності на ${viewport.device}`, () => {
            if (viewport.device !== 'Комп`ютер' && viewport.device !== 'Ноутюук') {
                cy.viewport(viewport.width, viewport.height);
                cy.visit('https://dog.testoviydomen.fun/');
                cy.get('#mobile_menu_toggle').click();
                cy.get('.sidenav').should('be.visible');
                cy.visit('https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/');
                cy.get('#left_menu_toggle').click({force: true});
                cy.get('#left_menu').should('be.visible');
            }
            createNewUser();
            makeOrder();
        });
    });
});