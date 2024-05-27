describe('Перевірка роботи фільтраів', () => {
    it('Усі дропдауни працюють', () => {
        cy.visit('https://dog.testoviydomen.fun/search/')
        cy.get('.filter_name').each((filter) => {
            cy.wrap(filter).click()
        })
        cy.get('[id^="collapse-attribute-"]').each((element) => {
            cy.wrap(element).should('exist');
        });
    })

    it('Філтр за кольором працює', () => {
        cy.visit('https://dog.testoviydomen.fun/search/')
        cy.get('.filter_name').contains('Колір').click()
        cy.get('[id^="collapse-attribute-"]').should('exist')

        cy.get('.filter_value_name').contains('Ocean').click()
        cy.wait(5000);
        //Чекаємо поки завантажаться товари
        cy.get('a.product_name').contains('Ocean', {timeout: 5000})

        cy.get('.filter_value_name').contains('Cherry').click()
        cy.wait(5000);
        //Чекаємо поки завантажаться товари
        cy.get('a.product_name').contains('Cherry', {timeout: 5000})

        cy.get('.filter_value_name').contains('Silver').click()
        cy.wait(5000);
        //Чекаємо поки завантажаться товари
        cy.get('a.product_name').contains('Silver', {timeout: 5000})
    })

    it('Фільтр за матеріалом працює', () => {
        cy.visit('https://dog.testoviydomen.fun/search/')
        cy.get('.filter_name').contains('Матеріал').click()
        cy.get('.filter_value_name').contains('синтетика').click()
        cy.wait(5000);
        //Чекаємо поки завантажаться товари
        cy.get(':nth-child(1) > .product_min > div.product_name > .product_name').click()
        cy.contains('Характеристики').click()
        cy.contains('синтетика')
    })

    it('Кнопка скидання фільтрів працює', () => {
        cy.visit('https://dog.testoviydomen.fun/search/')
        cy.get('.filter_name').contains('Матеріал').click()
        cy.wait(2000);
        cy.get('.filter_value_name').contains('синтетика').click()
        cy.wait(2000);
        cy.get('.filter_value_name').contains('метал').click()
        cy.wait(6000);
        cy.contains('Очистити', {timeout: 7000}).click()
        cy.get('.filter_name').contains('Матеріал').click()
        cy.get('input[data-value="синтетика"]').should('not.be.checked')
        cy.get('input[data-value="метал"]').should('not.be.checked')
    })
})