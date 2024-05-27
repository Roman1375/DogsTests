describe('Перевірка відображення ul, ol списків', () => {
    const pages = ['https://dog.testoviydomen.fun/', 'https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/', 'https://dog.testoviydomen.fun/search/','https://dog.testoviydomen.fun/catalog/igrashki-dlia-sobak/collar-company-pitchdog-pitchdog-igrushka-gantel-dlia-aportirovki-dlia-sobak/?variant=62397'];

    pages.forEach((page) => {
        it(`Списки повині бути та відображатись на сторінці ${page}`, () => {
            cy.visit(page);
            cy.get('ul')
                .should('exist')
                .should('be.visible')
                .find('li');
            cy.get('ol')
                .should('exist')
                .should('be.visible')
                .find('li');
        });
    });
});
