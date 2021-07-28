

  describe('My First Test', () => {
    it('Recorriendo pagina con formulario completo"', () => {
      cy.visit('https://criminallegalassociates.com')
      //cy.reload()

      cy.get('a[href*="nosotros"]').click()
      cy.get('a[href*="abogados"]').click()
      cy.visit('https://criminallegalassociates.com')
      cy.get('#nombre')
      .type('Ivan Ricardo Diaz C')
      cy.get('#telefono')
      .type('3012145455')
      cy.get('#correo')
      .type('idiazc@choucairtesting.com')
      cy.get('#mensaje')
      .type ('prueba de automatizacion con cypress ivan ricardo diaz, esta pagina esta bajo mi dominio tambien.')
      cy.get('.btn').click()
      
    

 
    })
  })