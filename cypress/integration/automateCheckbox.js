/// <reference types="Cypress" />

describe('My Test Pack 2',function(){
    it('Automate Checkbox Using Cypress',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
    cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
    cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3')
    cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
    cy.get("input[type='checkbox']").check(['option2']).should('be.checked')
    cy.get("input[type='checkbox']").check(['option3']).should('be.checked')
    cy.get("input[type='checkbox']").check(['option1']).should('be.checked')
    cy.get("input[type='checkbox']").uncheck(['option2']).should('not.be.checked')
    cy.get("input[type='checkbox']").uncheck(['option3']).should('not.be.checked')
    cy.get("input[type='checkbox']").uncheck(['option1']).should('not.be.checked')


    })
})