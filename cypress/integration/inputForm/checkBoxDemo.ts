/// <reference types="Cypress-xpath" />
require("cypress-xpath")
describe("Simple Form Check Boxes",()=>{
    
    it("Checkbox Demo",()=>{
        cy.get('[href="./basic-checkbox-demo.html"]').eq(1).click({force:true})
        cy.get('[id="isAgeSelected"]').click({force:true})
    })
})