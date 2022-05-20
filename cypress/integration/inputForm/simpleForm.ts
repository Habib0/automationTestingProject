/// <reference types="Cypress-xpath" />
require("cypress-xpath")
describe("Simple Form",()=>{
    
    it("Form Demo",()=>{
        cy.visit('/');
        cy.get('.at-cm-no-button').click({force:true})
        cy.xpath('//a[contains(text(), "Input Forms")]').eq(1).click({force:true})
        cy.get('[href="./basic-first-form-demo.html"]').eq(1).click({force:true})
        cy.get('[placeholder="Please enter your Message"]').type("hello world")
        cy.xpath('//button[@type="button" and contains(text(), "Show Message")]').click({force:true})
        
    })

})