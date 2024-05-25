describe('Перевірка локалізації', () => {
    it('Зміна мови', () => {
        cy.viewport(1280, 720);
        cy.visit('https://dog.testoviydomen.fun/');

        cy.get('.action_sale_title > span').should('have.text', 'Акції та знижки');

        cy.get('.left_col > #language_toggle > [data-code="ru"]').click();
        cy.url().should('include', '/ru/');

        cy.get('.action_sale_title > span').should('have.text', 'Акции и скидки');
    })
})