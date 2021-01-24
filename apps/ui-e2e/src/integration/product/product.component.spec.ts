describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productcomponent--primary'));

  it('should render the component', () => {
    cy.get('customify-product').should('exist');
  });
});
