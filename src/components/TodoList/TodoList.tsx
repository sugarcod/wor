import {useSelector} from 'react-redux';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.scss';
import React from 'react';

const TodoList = () => {
  const all = useSelector(store => store.todos)
  
  return <div className={styles.todo}>
    <div >
      <span>Income todos</span>
      <div className={styles.div}>
      {all.map(elem => !elem.completed ? <Todo key={elem.id} {...elem} /> : null) }
      </div>
      
    </div>
    <div >
      <span>Completed</span>
      <div className={styles.div}>
      {all.map(elem => elem.completed ? <Todo key={elem.id} {...elem} /> : null) }</div>
      
    </div>
    </div>
    

  
}

export default TodoList