/// <reference types="cypress" />
describe('Navigation Link', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });

  //checking each link in navigation bar that works as expected
  it('should navigate to Landing page', () => {
    cy.get('devxhub-logo').click();
    cy.url().should('include', '/');
  });

  it('should navigate to Community page', () => {
    cy.contains('Community').click();
    cy.url().should('include', '/community');
  });

  it('should navigate to Healing page', () => {
    cy.contains('Healing').click();
    cy.url().should('include', '/healing');
  });

  it('should redirect to Festival page', () => {
    cy.contains('Festival').click();
    cy.url().should('include', '/festival');
  });
});
