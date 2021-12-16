/// <reference types="Cypress" />


describe('My Test Pack 5',function(){
    it('Handling Dynamic DropDown',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.rahulshettyacademy.com/')
        cy.go('back')
        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')
        

       
})
})