import React from 'react'
import styles from './todo.module.css';
import { notFound } from 'next/navigation';
import Hero from '../../../components/hero';

const fetchTodo = async (todoId) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
    const res = await fetch(url);
    const todo = await res.json();
    return todo;
}

async function TodoPage({params: {todoId}}) {
    const todo = await fetchTodo(todoId)

    if (!todo.id) return notFound();

  return (
    <>
        <Hero
     image="https://images.unsplash.com/photo-1681930445943-ccd458be6e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
     title={todo.title}
    //  subtitle="Catchy little phrase"
     />
       <div className={styles.container}>
        <h2>#{todo.id}: {todo.title}</h2>
        <p  className={styles.borderBottom}>Completed: {todo.completed ? "Yes" : "Nope"} </p>
        <p  className={styles.user}>By User: {todo.userId}</p>
    </div>
    </>
  
  )
}

export default TodoPage