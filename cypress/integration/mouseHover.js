/// <reference types="Cypress" />
 
describe('Test Suite', function() 
{
 
it('Handling Mouse Hover',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Reload').click()
cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')
cy.contains('Top').click({force:true})
cy.url().should('include','top')
cy.contains('Reload').click({force:true})
cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')
})
})