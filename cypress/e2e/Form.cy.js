/// <reference types="Cypress" />
 
describe("Subscribe page", ()=>{
    beforeEach((()=>{
        cy.visit("http://localhost:3000/")
    }))

    it("Should render successfully", ()=>{
        cy.get("#logo")
        cy.get("form")
    })

    describe("If the form is complete", ()=>{
        it("Should send successfully", ()=>{
            cy.get('input[placeholder="Email"]').type("alejo@gmail.com")
            cy.get('input[placeholder="Nombre"]').type("Alejo")
            cy.get('input[placeholder="Apellido"]').type("Rojas")
            cy.get('select').select('Basico')
            cy.get("button").contains("Siguiente").click()
                /* Luego de que nos suscribimos se muestra un alert por lo que preguntamos 
                si se renderiza correctamente */
            cy.on('window:alert', (str) => {
                expect(str).to.equal(`Tu cuenta se ha registrado exitosamente!`)
            })
        })
    }) 

    describe("If the form is incomplete", ()=>{
        it("Should not send ", ()=>{
            cy.get('input[placeholder="Nombre"]').type("Alejo")
            cy.get('input[placeholder="Apellido"]').type("Rojas")
            cy.get('select').select('Premium')
            cy.get("button").contains("Siguiente").should("be.disabled")
        })
    }) 

    describe("On add profile", ()=>{
        it("Should add a new input correctly", ()=>{
            cy.get('input[placeholder="Nombre del perfil"]').should("not.exist")
            cy.get("#add-profile-btn").click()
            cy.get('input[placeholder="Nombre del perfil"]')
            cy.get("#add-profile-btn").click()
            cy.get('input[placeholder="Nombre del perfil"]').should("have.length", 2)

        })
    })

})
