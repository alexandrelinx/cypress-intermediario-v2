Cypress.Commands.add('cloneViaSSH', project => {
    const domain = Cypress.config('baseUrl').replace('http://', '')
   // console.log(domain)
   // console.log(project)
    cy.exec (`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)

  })
  