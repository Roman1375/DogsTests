describe('Перевірка роботи пошуку', () => {
    it('Пройдено', () => {
        cy.visit('https://dog.testoviydomen.fun/')
        cy.get('input[placeholder="Пошук за товарами та брендами"]').type('Flamingo{enter}')
        cy.get('a').contains('Flamingo')
        cy.get('#search_in_search_page_input').clear().type('Світиться у темряві{enter}')
        cy.get('a').contains('світиться у темряві',{timeout: 6000})
        cy.get('#search_in_search_page_input').clear().type('Ігрвшка{enter}')
        cy.contains('Нема товарів', {timeout: 6000})
    })
})

