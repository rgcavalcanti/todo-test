import { styled } from "styled-components";

type Props = {
  todos: Array<Todo>;
  handleChangeStatus: (todoID: string) => void;
};

export const TodosList: React.FC<Props> = ({
  todos,
  handleChangeStatus: toggleStatus,
}) => {
  if (todos.length == 0) {
    return <div>Nenhuma tarefa aqui =(</div>;
  }

  return (
    <List>
      {todos.map((todo) => (
        <>
          <li key={todo.description}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleStatus(todo.ID)}
            />
            <p>{todo.description}</p>
          </li>
        </>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;

  li {
  }

  li + li {
    margin-top: 8px;
  }

  input {
    display: inline-block;
  }

  p {
    font-family: var(--fontTODO);
    display: inline-block;
    margin-left: 4px;
    font-size: 1.5rem;
  }

  input:checked + p {
    text-decoration: line-through;
  }
`;
