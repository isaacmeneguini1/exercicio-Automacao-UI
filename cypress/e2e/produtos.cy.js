/// <reference types="cypress"/>


describe('Funcionalidade: produto', () => {

    beforeEach(() => {
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
       
    });
      
       it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block ')
            .first().click()      
    });

    it('Deve buscar um produto com sucesso', () => {
        
        cy.get(' .product-block ')
        .contains('Apollo Running Short')
        .click()
        
    });


});