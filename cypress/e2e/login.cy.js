export function Login() {
    const password = 'testPassword123';
    cy.visit('https://dog.testoviydomen.fun/login/')
    cy.get('#email').type('1322716522')
    cy.get('#password').type(password)

    cy.get('button[type="submit"]').click()
    cy.get('.page_title').should('be.visible').should('contain', 'Особистий кабінет')
}