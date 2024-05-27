describe('Тестування альтів на головному банері', () => {
    it('зображення слайдера містять alt атрибут і текст в ньому', () => {
        cy.visit('https://dog.testoviydomen.fun/');
        cy.get('.sl.slick-slide img').each(($slide) => {
            cy.wrap($slide).should('have.attr', 'alt').and('not.be.empty');
        });
    });
    it('зображення лівого та правого банера містять alt атрибут і текст в ньому', () => {
        cy.visit('https://dog.testoviydomen.fun/');

        cy.get('.left_img img').should('have.attr', 'alt').and('not.be.empty');
        cy.get('.right_img').should('have.attr', 'alt').and('not.be.empty');
    });
});
