const randomTenDigitNumber = Math.floor(Math.random() * 1e9) + 1e9;
const name = 'TestName';
const lastName = 'TestLastName';
const email = 'testEmail@gmail.com';
const password = 'testPassword123';


describe('Перевірка роботи реєстрації при валідних даних', () => {
    it('Реєстрація при валідних даних', () => {
        cy.visit('https://dog.testoviydomen.fun/registration/')
        cy.get('#first_name').type(name)
        cy.get('#last_name').type(lastName)
        cy.get('#phone').type(randomTenDigitNumber.toString())
        cy.get('#email').type(email);
        cy.get('#password').type(password)
        cy.get('#re_password',).type(password, {force: true})

        cy.get('button[type="submit"]').click()
        cy.get('.swal-modal').should('exist').should('be.visible')
    })
})

describe('Перевірка роботи входу при валідних даних', () => {
    it('Вхід при валідних даних', () => {
        cy.visit('https://dog.testoviydomen.fun/login/')
        cy.get('#email').type(randomTenDigitNumber.toString())
        cy.get('#password').type(password)

        cy.get('button[type="submit"]').click()
        cy.get('.page_title').should('be.visible').should('contain', 'Особистий кабінет')

        cy.contains(name).should('be.visible')
    })
})
