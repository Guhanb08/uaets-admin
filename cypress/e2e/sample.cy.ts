// cypress/e2e/ledger.cy.ts

let ledgerEntries: any[] = [];

describe("Insert 20 ledger transactions individually", () => {
  before(() => {
    cy.fixture("ledgers.json").then((data) => {
      ledgerEntries = data;
    });
  });

  beforeEach(() => {
    cy.visit("http://localhost:5173/apps/common/ledger");
  });

  Array.from({ length: 5 }).forEach((_, index) => {
    it(`submits transaction #${index + 1}`, () => {
      const entry = ledgerEntries[index];

      cy.get("button").contains("Add").click();

      cy.get("label")
        .contains("Transaction Type")
        .parents(".app-select")
        .find(".v-select__selection")
        .click({ force: true });

      cy.get(".v-list-item-title")
        .contains(entry.transactionType === "CREDIT" ? "CREDIT" : "DEBIT")
        .click();

      cy.get("input.flatpickr-input")
        .clear({ force: true })
        .type(entry.transactionDate, { force: true })
        .blur();

      cy.get("label")
        .contains("Payer / Payee")
        .siblings("div")
        .find("input")
        .clear({ force: true })
        .type(entry.transactionBy, { force: true });

      cy.get("label")
        .contains("Amount")
        .siblings("div")
        .find("input")
        .clear({ force: true })
        .type(entry.amount.toString(), { force: true });

      cy.get("label")
        .contains("Reference Id")
        .siblings("div")
        .find("input")
        .clear({ force: true })
        .type(entry.referenceId, { force: true });

      cy.get("label")
        .contains("Remarks")
        .siblings("div")
        .find("textarea")
        .clear({ force: true })
        .type(entry.remarks, { force: true });

      cy.get("button").contains("Save").click();

      cy.contains("Ledger created successfully", { timeout: 5000 }).should("exist");

      cy.wait(1000);
    });
  });
});
