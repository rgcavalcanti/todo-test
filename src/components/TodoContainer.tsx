import { styled } from "styled-components";
import { useTodo } from "../hooks/useTodo";
import { Counter } from "./Counter";
import { CreateTodo } from "./CreateTodo";
import { FilterTodos } from "./FilterTodos";
import { TodosList } from "./TodosList";

export const TodoContainer = () => {
  const { todos, changeFilter, createTodo, toggleStatus } = useTodo();

  return (
    <Container>
      <Title>Test TODO</Title>
      <CreateTodo handleCreate={createTodo} />
      <TodosList todos={todos} handleChangeStatus={toggleStatus} />
      <Footer>
        <Counter todos={todos} />
        <FilterTodos handleFilter={changeFilter} />
      </Footer>
    </Container>
  );
};

const Container = styled.main`
  margin: 100px auto;
  width: 600px;
  min-height: 500px;
  background-color: var(--grey);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-gap: 1rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Footer = styled.footer`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;
