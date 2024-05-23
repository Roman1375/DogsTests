describe('Перевірка зміни типу товару', () => {
    it('Пройдено', () => {
        cy.visit('https://dog.testoviydomen.fun/catalog/odiag-dlia-sobak/zhiletki-dlia-sobak/collar-airyvest-one-odnostoronniaia-zhiletka-dlia-sobak-oranzhevaia/?variant=20614')
        let initialArticle;
        let changedArticle;

        cy.get('#product_article').invoke('text').then((text) => {
            initialArticle = text;
        });

        cy.get('[data-product_id="4072"] > img').click();

        cy.get('#product_article', {timeout: 10000}).invoke('text').then((text) => {
            changedArticle = text;
        });

        cy.wrap(null).then(() => {
            expect(initialArticle).not.to.equal(changedArticle);
        });
    })
})

describe('Перевірка роботи табів', () => {
    it('Пройдено', () => {
        cy.visit('https://dog.com.ua/catalog/harchuvannya-sobak/sukhii-korm-dlia-sobak/sukhoi-korm-oven-baked-tradition-sukhoi-korm-dlia-shchenkov-vsekh-porod-iz-svezhego-miasa-kuritsy/?variant=9650-5')
        cy.get('#tab-1').should('be.visible')
        cy.get('#tab-3').should('not.be.visible')
        cy.get('.tabs-nav > :nth-child(3) > a').click()
        cy.get('#tab-3').should('be.visible')
        cy.get('#tab-2').should('not.be.visible')
        cy.get('.tabs-nav > :nth-child(2) > a').click()
        cy.get('#tab-2').should('be.visible')
    })
})
describe('Перевірка зміни кольору товару', () => {
    it('Пройдено', () => {
        cy.visit('https://dog.testoviydomen.fun/catalog/odiag-dlia-sobak/zhiletki-dlia-sobak/collar-airyvest-one-odnostoronniaia-zhiletka-dlia-sobak-oranzhevaia/?variant=20614')
        cy.get('.tabs-nav > :nth-child(2) > a').click();
        let initialColor;
        let changedColor;

        cy.get('.stripped > tbody > :nth-child(3) > :nth-child(2)').invoke('text').then((text) => {
            initialColor = text;
        });

        cy.get('[data-product_id="4072"] > img').click();

        cy.get('.stripped > tbody > :nth-child(3) > :nth-child(2)').invoke('text').then((text) => {
            changedColor = text;
        });

        cy.wrap(null).then(() => {
            expect(initialColor).not.to.equal(changedColor);
        });
    })
})

describe('Перевірка роботи кнопок улюблені та порівняння', () => {
    it('Пройдено', () => {
        cy.visit('https://dog.com.ua/catalog/harchuvannya-sobak/sukhii-korm-dlia-sobak/sukhoi-korm-oven-baked-tradition-sukhoi-korm-dlia-shchenkov-vsekh-porod-iz-svezhego-miasa-kuritsy/?variant=9650-5')
        cy.get('.add_to_like > .row > :nth-child(1)').click()
        ///cy.get('.add_to_like > .row > :nth-child(1)').should('have.class', 'active')
    })
})