import {Login} from "./reusableFunctions/login.cy";


describe('Перевірка сторінки товару', () => {
    it('Зміна артикула при зміні кольору товару', () => {
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

    it('Зміна характеристик при зміні кольору', () => {
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

    it('Переключення табів', () => {
        cy.visit('https://dog.testoviydomen.fun/catalog/odiag-dlia-sobak/kombinezoni/collar-airyvest-one-uteplennyi-kombinezon-dlia-sobak-salatovyi/?variant=24115')
        cy.get('#tab-1').should('be.visible')
        cy.get('#tab-3').should('not.be.visible')
        cy.get('.tabs-nav > :nth-child(3) > a').click()
        cy.get('#tab-3').should('be.visible')
        cy.get('#tab-2').should('not.be.visible')
        cy.get('.tabs-nav > :nth-child(2) > a').click()
        cy.get('#tab-2').should('be.visible')
    })
})

describe('Перевірка роботи кнопок улюблені та порівняння', () => {
    it('Додавання товару в улюблені та правильне відображення кнопок', () => {
        cy.viewport(1280, 720)
        Login();
        cy.visit('https://dog.testoviydomen.fun/catalog/odiag-dlia-sobak/kombinezoni/collar-airyvest-one-uteplennyi-kombinezon-dlia-sobak-salatovyi/?variant=24115')
        let productCode;
        cy.get('.offset-m1 > :nth-child(1) > :nth-child(1) > .additional_info_value').invoke('text').then((text) => {
            productCode = text;

            cy.get('.add_to_like > .row > :nth-child(1)').click()
            cy.get('.add_to_like.js-toggle-wishlist ').should('have.class', 'active')

            cy.contains('Улюблені').click()
            cy.get('.product_min > .product_photo > .additional_info_value').contains(productCode).should('exist')
            cy.get('div.product_name > .product_name').click()
            cy.get('.add_to_like.js-toggle-wishlist ').should('have.class', 'active')
        });
    })
    it('Додавання товару в порівняння', () => {
        cy.viewport(1280, 720)
        Login();
        cy.visit('https://dog.testoviydomen.fun/catalog/odiag-dlia-sobak/kombinezoni/collar-airyvest-one-uteplennyi-kombinezon-dlia-sobak-salatovyi/?variant=24115')

        cy.get('.add_to_comparison > .row > :nth-child(1)').click()
        cy.get('.add_to_comparison').should('have.class', 'active')

        cy.contains('Порівняння').click()
        cy.get('.table').find('.one_product').should("exist")
    })
})