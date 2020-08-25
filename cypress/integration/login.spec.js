describe("User Flow", () => {
  it("the user should login in the application", () => {
    cy.visit("/")
    cy.get("#username").type("testing-user@nave.rs")
    cy.get("#password").type("nave1234")
    cy.get("#loginButton").click()
    cy.url().should("include", "/Home")
    cy.reload()
  })

  it("the user should navigate and create a new item", () => {
    cy.get("#addButton").click()
    cy.get("#name").type("Jojo")
    cy.get("#jobRole").type("Dio Puncher")
    cy.get("#date").type("1995-12-26")
    cy.get("#admissionDate").type("2001-12-26")
    cy.get("#project").type("Crusaders")
    cy.get("#url").type(
      "https://pbs.twimg.com/media/EHmuH42X0AAC_oX?format=jpg"
    )
    cy.get("#submitButton").click()
    cy.get("#closeIcon").click()
    cy.url().should("include", "/Home")
  })

  it("the user should edit a item", () => {
    cy.contains("Jojo").click()
    cy.get("#editIcon").click()
    cy.get("#name").clear().type("Jojo")
    cy.get("#jobRole").clear().type("Marine Biologist")
    cy.get("#date").clear().type("1995-12-26")
    cy.get("#admissionDate").clear().type("2015-12-26")
    cy.get("#project").clear().type("Ocean Man")
    cy.get("#url")
      .clear()
      .type(
        "https://i.pinimg.com/originals/3b/ad/70/3bad703c630fd1e9cd346611bb749c4b.jpg"
      )
    cy.get("#submitButton").click()
    cy.get("#closeIcon").click()
    cy.url().should("include", "/Home")
  })

  it("the user should delete a item", () => {
    cy.contains("Jojo").click()
    cy.get("#deleteIcon").click()
    cy.get("#confirmButton").click()
    cy.get("#closeIcon").click()
    cy.wait(400)
    cy.reload()
    cy.url().should("include", "/Home")
  })
})
