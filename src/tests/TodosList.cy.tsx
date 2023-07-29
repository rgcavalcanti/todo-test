import { TodosList } from '../components/TodosList'

describe('<TodosList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodosList />)
  })
})