export function makeOrder(){
    cy.clearLocalStorage()
    cy.viewport(1280, 720)
    cy.visit('https://dog.testoviydomen.fun/catalog/harchuvannya-sobak/likuvalnii-korm-dlia-sobak/korm-konservovanii-dolina-noteci-premium-pc-intestinal-dlia-sobak-z-problemami-shlunka/?variant=DN%20185%20(254)')
    cy.get('.current_option').contains('Купити').click()
    cy.get('.toast').should('be.visible').should('contain.text', 'Додано до кошика')
    cy.get('#js_cart_items_count').should('have.text', '1')
    let productName;
    cy.get('.seo_h1').invoke('text').then((text) => {
        productName = text.split(' ').slice(0, 6).join(' ');
        cy.get('.fa-shopping-car').click()
        cy.get('.name').should('include.text', productName)
    })
    cy.get('input[id="recipient_not_me"]').click({force: true})
    cy.get('#recipient_not_me_first_name').type('Test')
    cy.get('#recipient_not_me_last_name').type('Test')
    cy.get('#recipient_not_me_phone').type('0000000000')

    cy.get(':nth-child(7) > .select-wrapper > .dropdown-trigger').click()
    cy.contains('Самовивіз (м. Київ, пров.Куренівський 17)').click()

    cy.get('#payment_type_block > .select-wrapper > .dropdown-trigger').click()
    cy.contains('Оплата готівкою при отриманні').click()

    cy.contains('Підтвердження замовлення').click()
    cy.contains('Дякуємо за замовлення!').should('be.visible')
}