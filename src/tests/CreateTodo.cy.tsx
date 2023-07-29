import { CreateTodo } from '../components/CreateTodo'

describe('<CreateTodo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateTodo />)
  })
})