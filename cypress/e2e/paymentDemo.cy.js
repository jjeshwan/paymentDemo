import { DemoPage } from "../page-objects/DemoPage";
const demoPage = new DemoPage();
let kevin_demo_url = Cypress.env('kevin_demo_url');
let swedbank_url = Cypress.env('swedbank_url');
let payment_amount = Cypress.env('payment_amount');
let email_address = Cypress.env('email_address');

describe("Payment Process Test", () => {
  beforeEach(() => {
    cy.visit(kevin_demo_url);
    cy.get(demoPage.getAcceptCookiesButton()).click();
  });

  it("should complete the payment process", () => {
    // Choose Bank Payment option
    cy.get(demoPage.getBankOptionButton()).click();

    // Fill all the fields with data
    cy.get(demoPage.getAmountInputField()).type(payment_amount);
    cy.get(demoPage.getEmailInputField()).type(email_address);

    // Find the checkbox for terms and conditions but do not click it at first
    //const termsCheckbox = cy.get("[data-testid='terms-and-conditions-checkbox']");
    const termsCheckbox = cy.get(demoPage.getTermsAndConditionCheckboxField());

    // Choose Swedbank as the payment bank
    cy.get(demoPage.getSwedbankLabel()).click();

    // Click PAY
    cy.get(demoPage.getPayButton()).click();

    // Check if the error message for Terms and Conditions checkmark appears
    cy.get(demoPage.getTermsAndConditionErrorMessage())
      .should("be.visible")
      .should("have.text", "You have to agree to the terms and conditions and privacy policy")
      .should('have.css','-webkit-text-fill-color','rgb(255, 59, 48)');

    // Mark the checkmark for terms and conditions
    termsCheckbox.click();

    // Proceed with payment
    cy.get(demoPage.getPayButton()).click();

    // Ensure that the action, leading to the redirect to the bank website, happens without performing any actions on the bank's superdomain.
    
    cy.origin(swedbank_url, () => {
      cy.url().should("include", Cypress.env('swedbank_url')) // Replace with the actual URL of the bank's website
    });

    cy.visit(kevin_demo_url);
    cy.get(demoPage.getAcceptCookiesButton()).should('not.exist');
  });
});
