describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pageintroheadercomponent--primary&knob-headerData'));

  it('should render the component', () => {
    cy.get('customify-page-intro-header').should('exist');
  });
});
