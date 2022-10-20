import React from 'react'
import Background from '../Background/Background'
import Filter from '../Filter/Filter'
import TodoHead from '../TodoHead/TodoHead'
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
import './Todo.css'



export default function Todo() {
  return (
    <>
    <Background />
    <div className='content'>
      <TodoHead />
        <TodoInput />
        <TodoList />
        <Filter />
    </div>
    </>
  )
}
