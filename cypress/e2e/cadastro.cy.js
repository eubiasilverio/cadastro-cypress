describe('template spec', () => {
  it('passes', () => {
    // Entrando no website escolhido
    cy.visit('https://meupc.net/')

    // ESperando um 1 segundo
    cy.wait(1000)
     
    // clicando no botao do menu
    cy.get('.navbar-burger').click()


    cy.get('ul.menu-list') // Pegando a ul com a classe .menu-list
    .children('li') // Pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]') // Pegando o filho de li que tem o href com o valor https://meupc.net/cadastro
    .click() 

    // Preenchendo o campo nome do cadastro com o valor Bia teste
    cy.get('input[name="nome"]').type('Bia teste')

    // Preenchendo o campo email do cadastro com o valor johndoe@example
    cy.get('input[name="email"]').type('beatris_silverio@outlook.com')

    // Preenchendo o campo senha do cadastro com o valor 123456
    cy.get('input[placeholder="Defina uma senha"]').type('123456')

    // Clicando no checkbox de aceitar os termos
    cy.get('input[type="checkbox"]').check({ force: true })
    
    // Clicando no botão de cadastrar
    cy.contains('Cadastrar-se').click()
    
    // Verificando se chegamos na tela final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible')
  })
})