describe('Перевірка h1', () => {
    const pages = ['https://dog.testoviydomen.fun/', 'https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/', 'https://dog.testoviydomen.fun/dostavka-i-oplata/', 'https://dog.testoviydomen.fun/catalog/vitamini-ta-kharchovi-dobavki-dlia-sobak/practik-superfood-pechinkovii-sous-dlia-sobak-ta-kotiv/?variant=30LSS942'];

    pages.forEach((page) => {
        it(`Відображення H1 на сторінці ${page}`, () => {
            cy.visit(page);
            cy.get('h1').each(($h1) => {
                cy.wrap($h1).should('exist').should('be.visible');
            });
        });
    });
});
