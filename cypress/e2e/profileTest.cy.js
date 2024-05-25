import {createNewUser} from "./reusableFunctions/createNewUser.cy";


describe('Перевірка профілю', () => {
    it('Перевірка профілю', () => {
        createNewUser();
        cy.get('.personal_data_title > a').click();

        const randomTenDigitNumber = Math.floor(Math.random() * 1e9) + 1e9;
        const newName = 'NewTestName';
        const newLastName = 'NewTestLastName';
        const newEmail = 'newTestEmail@gmail.com';
        const newPassword = 'newPassword123';

        cy.get('#first_name').clear().type(newName)
        cy.get('#last_name').clear().type(newLastName)
        cy.get('#phone').clear().type(randomTenDigitNumber.toString())
        cy.get('#email').clear().type(newEmail)
        cy.get('#new_password').type(newPassword);
        cy.get('#re_password').type(newPassword);
        cy.get('#current_password').type('testPassword123');

        cy.contains('Зберегти').click()

        cy.wait(4000)

        cy.get('#email').type(randomTenDigitNumber.toString());
        cy.get('#password').type(newPassword);
        cy.get('button[type="submit"]').click()

        cy.get('#first_name').should('have.value', newName)
        cy.get('#last_name').should('have.value', newLastName)
        cy.get('#phone').should('have.value', randomTenDigitNumber.toString())
        cy.get('#email').should('have.value', newEmail)
    })
})