import React from "react";
import ReactDOM from "react-dom/client";
import { TodoContainer } from "./components/TodoContainer.tsx";
import { GlobalStyle } from "./styles/globalStyles.tsx";
import { TodoProvider } from "./hooks/useTodo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoProvider>
      <TodoContainer />
    </TodoProvider>
  </React.StrictMode>
);
