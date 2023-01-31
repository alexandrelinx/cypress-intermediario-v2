describe('Acesso a Gitlab', () => {
    it('fazer login', () => {
      cy.visit('http://localhost')
      cy.get('[id^=user_login]').type('root')
      cy.get('[id^=user_password]').type('Amos@3781')
      cy.get('form').contains('Sign in').click()
      cy.wait(5000)
      cy.contains ('Welcome to GitLab').should('be.visible')

    
})
  })
