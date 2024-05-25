import {createNewUser} from "./reusableFunctions/createNewUser.cy";
import {makeOrder} from "./reusableFunctions/makeOrder.cy";

describe('Перевірка історії замовлень', () => {
    it('Перевірка історії замовлень', () => {
        createNewUser();
        cy.visit('https://dog.testoviydomen.fun/order_history/');
        cy.get('.last_history_alert').should('be.visible').should('contain.text', 'Немає замовлень')

        makeOrder();

        cy.get('.name').invoke('text').then((text) => {
            let productName = text.split(' ').slice(0, 6).join(' ');
            cy.visit('https://dog.testoviydomen.fun/order_history/');
            cy.get('.name').should('include.text', productName)
        })
        let today = new Date();
        let formattedDate = today.toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '.');
        cy.get('.date').should('include.text', formattedDate)
    })
})