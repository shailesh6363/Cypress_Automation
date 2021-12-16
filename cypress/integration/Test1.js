/// <reference types="Cypress" />


describe('My First Test Suite',function(){

    it('My First Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type('ca')
        cy.wait(2000)
       // cy.get('.product:visible').should('have.length',4)
       cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length',4)
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productlocator').find('.product').each(($el,index,$list)=>{
         const vegtext= $el.find('h4.product-name').text()
         if(vegtext.includes('Cashews - 1 Kg')){
            cy.wrap($el).find('button').click()
         }  
        // cy.get('.brand').then(function(logtext){
        //     cy.log(logtext.text())
        // })

        })
        cy.get("img[alt='Cart']").click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
   

})