/* global cy */
/// <reference types="cypress" />

describe('Map markers', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shall open popup on marker click', () => {
    cy.get('[data-testid="mapMarker-1023"]').click();
    cy.get('[data-testid="stationView-1023"]').should('be.visible');
  });

  it('shall close popup', () => {
    cy.get('[data-testid="mapMarker-1023"]').click();
    cy.get('.leaflet-popup-close-button').click();
    cy.wait(200);
    cy.get('[data-testid="stationView-1023"]').should('not.be.visible');
  });

  it('shall show information about station on popup', () => {
    cy.get('[data-testid="mapMarker-1023"]').click();
    cy.get('[data-testid="stationView-1023"]').within(() => {
      cy.get('[data-testid="stationName"]').should(
        'contain',
        'Professor Aschehougs plass'
      );
      cy.get('[data-testid="stationAddress"]').should(
        'contain',
        'Professor Aschehougs plass'
      );
    });
  });

  it('shall show available bikes on marker', () => {
    cy.get('[data-testid="mapMarker-1023"]').within(() => {
      const element = cy.get('[data-testid="markerBikesAvailable"]');
      element.should('contain', '2');
    });
  });

  it('shall show available docks on marker', () => {
    cy.get('[data-testid="mapMarker-1023"]').within(() => {
      const element = cy.get('[data-testid="markerDocksAvailable"]');
      element.should('contain', '10');
    });
  });

  it('shall show by color if bikes available', () => {
    cy.get('[data-testid="mapMarker-1023"]').within(() => {
      const element = cy.get('[data-testid="markerBikesAvailable"]');
      element.should('have.class', 'bg-success');
    });
  });

  it('shall show by color if bikes are not available', () => {
    cy.get('[data-testid="mapMarker-1755"]').within(() => {
      const element = cy.get('[data-testid="markerBikesAvailable"]');
      element.should('have.class', 'bg-light');
    });
  });

  it('shall show by color if docks available', () => {
    cy.get('[data-testid="mapMarker-1023"]').within(() => {
      const element = cy.get('[data-testid="markerDocksAvailable"]');
      element.should('have.class', 'bg-success');
    });
  });

  it('shall show by color if docks are not available', () => {
    cy.get('[data-testid="mapMarker-787"]').within(() => {
      const element = cy.get('[data-testid="markerDocksAvailable"]');
      element.should('have.class', 'bg-light');
    });
  });
});
