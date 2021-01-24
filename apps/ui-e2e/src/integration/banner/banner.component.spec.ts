describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bannercomponent--primary&knob-bannerData'));

  it('should render the component', () => {
    cy.get('customify-banner').should('exist');
  });
});
