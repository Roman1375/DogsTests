describe('Перевірка сортування', () => {
    it('Сортування за ціною від А до Я', () => {
        cy.visit('https://dog.testoviydomen.fun/catalog/kigtetochki/')
        cy.contains('Сортування').should('be.visible').click()
        cy.contains('По ціні (А-Я)').should('be.visible').click()
        cy.wait(2000);
        cy.get('.price_2 ').should('exist').then((price) => {
            let prices = []
            price.each((index, item) => {
                prices.push(item.innerText)
            })
            let sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices)
        })
    })
    it('Сортування за ціною від Я до А', () => {
        cy.visit('https://dog.testoviydomen.fun/catalog/kigtetochki/')
        cy.contains('Сортування').should('be.visible').click()
        cy.contains('По ціні (Я-А)').should('be.visible').click()
        cy.wait(2000);
        cy.get('.price_2 ').should('exist').then((price) => {
            let prices = []
            price.each((index, item) => {
                prices.push(item.innerText)
            })
            let sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices)
        })
    })
})