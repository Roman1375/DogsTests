import {Login} from "./login.cy.js";



describe('Перевірка роботи посилань', () => {
    it('Усі посилання працюють', () => {
        Login();
        cy.visit('https://dog.testoviydomen.fun/account/')
        cy.get('a').each((link) => {
            cy.wrap(link).should('have.attr', 'href').then((href) => {
                if (href.includes('http')) {
                    cy.request(href).its('status').should('eq', 200)
                }
            })
        })
    })
})