describe('Перевірка форми зворотнього зв\'язку', () => {
    it('Перевірка форми зворотнього зв\'язку', () => {
        cy.visit('https://dog.testoviydomen.fun/');
        cy.contains('Телефон').click();
        cy.get('#modal_header_phone').should('be.visible');
        cy.contains('Передзвоніть мені').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#feedback_modal').should('be.visible');

        cy.get('#name_modal_header').type('Test', {force: true});
        cy.get('#phone_modal_header').type('0000000000', {force: true});
        cy.get('.modal-content > .btn_v1').click();
        cy.contains('Успішно відправлено').should('be.visible');
    })
})