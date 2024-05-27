describe('Перевірка текстового блоку', () => {
    it('Коректне відображення текстового блоку', () => {
        cy.visit('/');
        cy.get('.text-block').should('be.visible').and('not.be.empty');
    });
});
