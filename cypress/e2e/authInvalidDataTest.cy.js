describe('Перевірка роботи реєстрації при невалідних даних', () => {
    it('Валідація при пустих полях', () => {
        cy.visit('https://dog.testoviydomen.fun/registration/')
        cy.get('button[type="submit"]').click()
        cy.get('.error_message').should('be.visible')
    })

    it('Валідація при неправильному email та паролі', () => {
        cy.visit('https://dog.testoviydomen.fun/registration/')
        cy.get('#first_name').type('Test')
        cy.get('#last_name').type('Test')
        cy.get('#phone').type("1234567890")
        cy.get('#email').type('Test')
        cy.get('#password').type('123')
        cy.get('#re_password',).type('IncorrectRePassword', {force: true})

        cy.get('button[type="submit"]').click()

        cy.contains('Паролі не співпадають').should('be.visible')
        cy.contains('Некоректний email').should('be.visible')
        cy.contains('Мінімальна довжина 4 символів').should('be.visible')
    })
})

describe('Перевірка роботи входу при невалідних даних', () => {
    it('Валідація при пустих полях', () => {
        cy.visit('https://dog.testoviydomen.fun/login/')
        cy.get('button[type="submit"]').click()
        cy.get('.error_message').should('be.visible')
    })

    it('Валідація при неправильному паролі', () => {
        cy.visit('https://dog.testoviydomen.fun/login/')

        cy.get('#email').type('0000000000')
        // Зашибісь в email телефон вводити)))
        cy.get('#password').type('incorrectPassword')

        cy.get('button[type="submit"]').click()

        cy.contains('Хибний пароль').should('be.visible')
    })
})