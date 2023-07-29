import { useState } from "react";
import { styled } from "styled-components";
import { uid } from "uid";

type Props = {
  handleCreate: (newTodo: Todo) => void;
};

export const CreateTodo: React.FC<Props> = ({ handleCreate: createTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    createTodo({
      description: inputValue,
      done: false,
      ID: uid(),
    });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="todoDescription"
        placeholder="Criar Todo"
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};

const Input = styled.input`
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 8px 16px;
  color: var(--black);
`;
