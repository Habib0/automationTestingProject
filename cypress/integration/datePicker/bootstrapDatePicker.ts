/// <reference types="Cypress-xpath" />
require("cypress-xpath")
describe("Date Picker",()=>{
    
    it("Date Picker Demo",()=>{
        cy.xpath('//a[contains(text(), "Date pickers")]').eq(1).click({force:true})
        
    })
})