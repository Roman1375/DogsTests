describe('Перевірка https', () => {
    it('HTTPS працює', () => {
        cy.request('https://dog.testoviydomen.fun/')
            .its('status')
            .should('eq', 200);
    });
})