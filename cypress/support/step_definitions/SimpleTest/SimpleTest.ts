import { Then, When, And } from 'cypress-cucumber-preprocessor/steps';

When('I navigate to the main page', () => {
  cy.visit('/');
});


And('I click Request a Demo button', () => {
    cy.contains("Request a demo").click()
});

And('I click not existing button', () => {
    cy.contains("Request a demo2").click()
});
