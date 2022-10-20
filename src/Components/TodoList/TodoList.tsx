import React, { useContext } from 'react'
import { TodoContext } from '../../Context/TodoContext'
import TodoItem from './TodoItem/TodoItem'
import {motion, Reorder} from "framer-motion"
import './TodoList.css'
import { ThemeContext } from '../../Context/ThemeContext'

export default function TodoList() {

    const { theme } = useContext(ThemeContext)
    
    const {todos, setTodos, clearCompleted} = useContext(TodoContext)

  return (
    <article className={theme === "dark" ? "todo-list dark" : "todo-list light"}>
        <Reorder.Group
            axis="y"
            values={todos}
            onReorder={setTodos}>
            {todos.map((todo:any) => (
                <Reorder.Item 
                    key={todo.todo}
                    value={todo}>
                        <motion.div 
                            initial={{scale: .4}} 
                            animate={{scale: 1}}
                            transition={{duration: .2}}>
                            <TodoItem 
                                key={todo.todo}
                                todo={todo}
                            />
                        </motion.div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
        <div className={theme === "dark" ? "bottom-list dark" : "bottom-list light"}>
            <span>{todos.length} items left</span>
            <button 
                type='button'
                onClick={() => clearCompleted()}
                >
                Clear completed
            </button>
        </div>
    </article>
  )
}
