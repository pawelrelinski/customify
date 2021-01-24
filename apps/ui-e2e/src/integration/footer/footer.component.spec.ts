describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footercomponent--primary&knob-menuIsOpen'));

  it('should render the component', () => {
    cy.get('customify-footer').should('exist');
  });
});
