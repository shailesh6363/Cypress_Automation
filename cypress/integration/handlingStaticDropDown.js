/// <reference types="Cypress" />


describe('My Test Pack 3',function(){
    it('Handling Static DropDown',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('option1').should('have.value','option1')
        cy.get('select').select('option2').should('have.value','option2')
        cy.get('select').select('option3').should('have.value','option3')
    })
})