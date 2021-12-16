/// <reference types="Cypress" />
 
describe('Test Suite', function() 
{
 
it('Handling Child Windows',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#openwindow').invoke('removeAttr','onclick').click()

})
})