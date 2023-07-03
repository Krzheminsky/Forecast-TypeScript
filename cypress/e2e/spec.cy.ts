import { defineConfig } from "cypress";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get(".leaflet-container")
      .click(400, 130)
      .trigger("mousedown", 400, 130, {
        bubbles: true,
        waitForAnimations: true,
      })
      .trigger("mousemove", 130, 130, {
        bubbles: true,
        waitForAnimations: true,
        pageX: 130,
        pageY: 130,
        which: 1,
      })
      .wait(100)
      .trigger("mouseup", {
        bubbles: true,
        waitForAnimations: true,
        which: 1,
        pageX: 130,
        pageY: 130,
      })

    cy.get('[name="chemical-substances"]').select('Аміак');
    cy.get('[name="vertical-stability"]').select(2);
    cy.get('[name="phisical-state"]').select(0);
    cy.get('[name="prognoz"]').select(0);
    cy.get('[name="wind"]').type('{selectall}').type('10').should('have.value', '10')
    cy.get('[name="wind"]').type('{downArrow}{enter}')
    cy.get('[name="term"]').type('{selectall}').type('30').should('have.value', '30')
    cy.get('[name="massa"]').type('{selectall}').type('1245600').should('have.value', '1245600')
    cy.get('[name="koef"]').type('{selectall}').type('0.8').should('have.value', '0.8')
    cy.get('[name="visota"]').type('{selectall}').type('0').should('have.value', '0')
    cy.get('[name="button-add-chimistry"]').click();

    cy.get('[name="time"]').type('{selectall}').type('60').should('have.value', '60')
    cy.get('[name="distance"]').type('{selectall}').type('1.1').should('have.value', '1.1')
    cy.get('[name="distance"]').type('{upArrow}{enter}').should('have.value', '1.2')
    cy.get('[name="density"]').type('{selectall}').type('420').should('have.value', '420')
    cy.get('[name="area"]').type('{selectall}').type('5.2').should('have.value', '5.2')
    cy.get('[name="button-add-losses"]').click();
    cy.get('[name="button-add-weather"]').click();
    cy.get('[name="button-add-chimistry"]').click();
    cy.get('[data-bs-target="#collapseOne"]').click();
    cy.get('[data-bs-target="#collapseOne"]').click();
    cy.get('[data-bs-target="#collapseOne"]').click();
    cy.get('[data-bs-target="#collapseTwo"]').click();
    cy.get('[data-bs-target="#collapseThree"]').click();

  })
})