

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays two todo items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.e2e-title').should('have.text', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    cy.get('.e2e-para').should('have.text', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')

  })
})
