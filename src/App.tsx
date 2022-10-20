import React from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';
import { ThemeContextProvider } from './Context/ThemeContext';
import { TodoContextProvider } from './Context/TodoContext';

function App() {
  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <Todo/>
      </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
