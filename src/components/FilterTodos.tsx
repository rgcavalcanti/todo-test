import { styled } from "styled-components";

type Props = {
  handleFilter: (status: "all" | "completed" | "active") => void;
};

export const FilterTodos: React.FC<Props> = ({
  handleFilter: changeFilter,
}) => {
  return (
    <Container>
      <Button onClick={() => changeFilter("all")}>All</Button>
      <Button onClick={() => changeFilter("active")}>Active</Button>
      <Button onClick={() => changeFilter("completed")}>Completed</Button>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

const Button = styled.button`
  width: 80px;
  background-color: var(--black);
  border: none;
  border-radius: 4px;
  padding: 4px;
`;
