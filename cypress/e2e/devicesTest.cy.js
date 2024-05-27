describe('Тестування на різних пристроях', () => {
    const viewports = [
        { device: 'MacBook 15', width: 1440, height: 900 },
        { device: 'iPhone X', width: 375, height: 812 },
        { device: 'iPad Mini', width: 768, height: 1024 },
        { device: 'Samsung S10', width: 360, height: 760 }
    ];

    viewports.forEach(viewport => {
        it(`Перевірка на ${viewport.device}`, () => {
            cy.viewport(viewport.width, viewport.height);
            cy.visit('https://dog.testoviydomen.fun');
            cy.get('h1').each(($h1) => {
                cy.wrap($h1).should('exist').should('be.visible');
            });
        });
    });
});