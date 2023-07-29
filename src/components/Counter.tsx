type Props = {
  todos: Array<Todo>;
};

export const Counter: React.FC<Props> = ({ todos }) => {
  return <p>{todos.filter((todo) => !todo.done).length} itens faltando</p>;
};
