describe('Перевірка метатегів в SEO меті', () => {
    it('Мета тега присутні і не пусті', () => {
        cy.visit('https://dog.testoviydomen.fun/');
        cy.get('title').should('not.be.empty');
        cy.get('meta[name="description"]').should('have.attr', 'content').and('not.be.empty');
    });
});
