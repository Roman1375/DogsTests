describe('Перевірка роботи пошуку', () => {
    it('Пройдено', () => {
        cy.visit('https://dog.testoviydomen.fun/')
        cy.get('input[placeholder="Пошук за товарами та брендами"]').type('Flamingo{enter}')
        cy.get('a').contains('Flamingo')
        cy.get('#search_in_search_page_input').clear().type('Світиться у темряві{enter}')
        cy.get('a').contains('світиться у темряві')
        cy.get('#search_in_search_page_input').clear().type('Неіснуючий товар{enter}')
        cy.contains('Нема товарів', {timeout: 6000})
    })
})
// describe('Перевірка роботи фільтрів', () => {
//     it('Пройдено', () => {
//         cy.visit('https://dog.testoviydomen.fun/')
//     })
// })

