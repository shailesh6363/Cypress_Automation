/// <reference types="Cypress" />


describe('My Test Pack 4',function(){
    it('Handling Dynamic DropDown',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==="India"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
       
    })
})