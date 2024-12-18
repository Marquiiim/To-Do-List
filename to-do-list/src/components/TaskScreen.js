import { useState } from 'react'
import styles from './TaskScreen.module.css'

import TasksBlocks from './TasksBlocks'

function TaskScreen() {
  const [task, setTask] = useState('')
  const [taskList, setTasksList] = useState([])

  const handleInputChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim() !== '') {
      setTasksList([...taskList, task])
      setTask('')
    }
  }

  const removeTask = (taskName) => {
    setTasksList(taskList.filter((task) => task !== taskName))
  }

  return (
    <section className={styles.container_screen}>
      <header className={styles.content_screen}>
        <form className={styles.actions} onSubmit={handleSubmit}>
          <input type='text' placeholder='O que devo fazer?' value={task} onChange={handleInputChange}></input>
          <button type='submit'>Adicionar</button>
        </form>
        <section className={styles.content_tasks}>
          <ul>
            {taskList.map((taskName, index) => (
              <TasksBlocks key={index} nameTask={taskName} onRemove={removeTask} />
            ))}
          </ul>
        </section>
      </header>
    </section>
  );
}

export default TaskScreen;
