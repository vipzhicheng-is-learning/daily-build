describe('Open page', () => {
  it('finds the content "type"', () => {
    cy.visit('https://www.baidu.com/')

    cy.contains('hao123')

  })
})