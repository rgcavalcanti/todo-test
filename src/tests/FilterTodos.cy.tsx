import { FilterTodos } from '../components/FilterTodos'

describe('<FilterTodos />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FilterTodos />)
  })
})