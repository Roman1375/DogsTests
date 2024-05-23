describe('Перевірка роботи реєстрації при невалідних даних', () => {
    it('Пройдено', () => {
        // cy.visit('https://dog.testoviydomen.fun/register')
        cy.visit('https://dog.com.ua/registration/')
        cy.get('#first_name').type('Test')
        cy.get('#last_name').type('Test')
        let randomTenDigitNumber = Math.floor(Math.random() * 1e9) + 1e9;
        cy.get('#phone').type( randomTenDigitNumber.toString())
        cy.get('#email').type('Test')
        cy.get('#password').type('TestPassword')
        cy.get('#re_password',).type('IncorrectRePassword', {force: true})

        cy.get('button[type="submit"]').click()

        cy.contains('Паролі не співпадають').should('be.visible')
        cy.contains('Некоректний email').should('be.visible')

        cy.get('#first_name').clear()
        cy.get('#last_name').clear()

        cy.get('button[type="submit"]').click()
        cy.contains('Обов\'язкове поле').should('be.visible')
    })
})