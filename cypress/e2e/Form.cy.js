/// <reference types="Cypress" />
 
describe("Subcribe page", ()=>{
    beforeEach((()=>{
        cy.visit("http://localhost:3000/")
    }))

    it("Should render succesfully", ()=>{
        cy.get("#logo")
        cy.get("form")
    })

    describe("If the form is complete", ()=>{
        it("Should send succesfully", ()=>{
            cy.get('input[placeholder="Email"]').type("alejo@gmail.com")
            cy.get('input[placeholder="Nombre"]').type("Alejo")
            cy.get('input[placeholder="Apellido"]').type("Rojas")
            cy.get('select').select('Basico')
            cy.get("button").contains("Siguiente").click()
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Tu cuenta se ha registrado exitosamente!`)
            })
        })
    }) 

    describe("If the form is incomplete", ()=>{
        it("Should not send ", ()=>{
            cy.get("#logo")
            cy.get('input[placeholder="Nombre"]').type("Alejo")
            cy.get('input[placeholder="Apellido"]').type("Rojas")
            cy.get('select').select('Premium')
            cy.get("button").contains("Siguiente").should("be.disabled")
        })
    }) 

})
