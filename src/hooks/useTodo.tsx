import { createContext, useContext, useState } from "react";

type TodoContextProps = {
  todos: Array<Todo>;
  createTodo: (newTodo: Todo) => void;
  toggleStatus: (todoID: string) => void;
  changeFilter: (status: "all" | "completed" | "active") => void;
};

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  createTodo: () => {},
  toggleStatus: () => {},
  changeFilter: () => {},
});

export const TodoProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "completed" | "active"
  >("all");

  const createTodo = (newTodo: Todo) => {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  const toggleStatus = (todoID: string) => {
    setTodos((oldTodos) => [
      ...oldTodos.map((todo) => {
        if (todo.ID === todoID) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      }),
    ]);
  };

  const changeFilter = (status: "all" | "completed" | "active") => {
    setFilterStatus(status);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "active") {
      return !todo.done;
    }

    if (filterStatus === "completed") {
      return todo.done;
    }

    return true;
  });

  return (
    <TodoContext.Provider
      value={{ todos: filteredTodos, createTodo, toggleStatus, changeFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
