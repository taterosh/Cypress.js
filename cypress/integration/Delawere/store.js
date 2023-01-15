
describe('Тест магазина QAstudio', function () {

   it('Совершение покупки', function () {
   	cy.visit('https://testqastudio.me/');
   	cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
   	cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
   	cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
   	cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
   	cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
   	cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
   	cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
	cy.intercept('POST', '/product/**').as('ajax-product');
	cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
	cy.get('.product-button-wrapper > button[name="add-to-cart"]:visible').click();
	cy.wait('@ajax-product');
	cy.wait('@ajax-reload');
	cy.get('#cart-modal').contains('Оформение заказа').click();
   	cy.get('#billing_first_name').type('Наталья');
   	cy.get('#billing_last_name').type('Иванова');
   	cy.get('#billing_address_1').type('Шереметьевская улица, дом 2');
   	cy.get('#billing_city').type('Москва');
   	cy.get('#billing_state').type('Москва');
   	cy.get('#billing_postcode').type('129594');
   	cy.get('#billing_phone').type('+79775775775');
   	cy.get('#billing_email').type('taterh@mail.ru');
   	cy.get('#place_order').click();
   	cy.contains('Ваш заказ принят. Благодарим вас.');
   }) 
})