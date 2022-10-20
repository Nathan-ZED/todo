import React, { ReactNode, useState, createContext, useEffect } from 'react';

interface ITodoContext {
    todos: string[],
    setTodos: any,
    setComplete: Function
    newTodo: Function,
    clearCompleted: Function,
    filter: Function,
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

interface IProps {
    children: ReactNode;
}

let todoSave: any = [];

export function TodoContextProvider({ children }: IProps): JSX.Element {
    
    const [todos, setTodos] = useState<[]>([]);
    

    
    const newTodo = (todo:any) => {
        const newTodo:any = {
            todo: todo,
            completed: false,
        }
        const old:any = [...todos]
        old.push(newTodo)
        todoSave = [...old]
        setTodos(old)
    }

    const filter = (name:string) => {
        if(name === 'All') setTodos(todoSave)
        if(name === 'Active') {
            const find = todoSave.filter((el:any) => !el.completed)
            setTodos(find)
        }
        if(name === 'Completed') {
            const find = todoSave.filter((el:any) => el.completed)
            setTodos(find)
        }
    }

    const clearCompleted = () => {
        const filter:any = todos.filter((el:any) => !el.completed)
        setTodos(filter)
    }

    const setComplete = (todo:any) => {
        const find:any = todos.find((el:any) => el.todo === todo.todo)
        find.completed ? find.completed = false : find.completed = true
    }

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            setComplete,
            newTodo,
            clearCompleted,
            filter,
        }}>
            {children}
        </TodoContext.Provider>
        );
}

