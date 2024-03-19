describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});
// Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie.
describe('Swiper Gallery Test', function () {
  it('Chceck if every slide contains a description"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.card-description').should('not.be.empty').should('contain', 'Italy')
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.card-description').should('not.be.empty').should('contain', 'United Kingdom')
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.card-description').should('not.be.empty').should('contain', 'France')
  });
});