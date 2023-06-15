/// <reference types="cypress" />

const baseUrl = 'http://localhost:3000';

describe('Test for Navigation Link', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('DEVxHUB Logo should be visible and navigate to Homepage on click', () => {
    cy.get('.layout .navbar a img[alt="DEVxHUB logo"]')
      .should('be.visible')
      .and(($img) => {
        expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
      })
      .click();
    cy.url().should('include', '/');
    cy.contains('p', 'Welcome to a tranquil sanctuary, where healing dances with nature, community radiates warmth, and minds evolve endlessly.');
  });

  it('Community should be visible and navigate to Community page on click', () => {
    cy.contains('a', 'Community').click();
    cy.url().should('include', '/community');
    cy.contains(
      'div',
      'This is Community page'
    );
  });

  it('Healing should be visible and navigate to Healing page on click', () => {
    cy.contains('a', 'Healing').click();
    cy.url().should('include', '/healing');
    cy.contains(
      'div',
      'This is Healing page'
    );
  });

  it('Festival should be visible and navigate to Festival page on click', () => {
    cy.contains('a', 'Festival').click();
    cy.url().should('include', '/festival');
    cy.contains(
      'div',
      'This is Festival page'
    );
  });
});
