import styles from './TasksBlocks.module.css'

import { useState } from 'react'

import { FiTrash2 } from "react-icons/fi" // ÍCONE PARA EXCLUIR TASK
import { SlCheck } from "react-icons/sl" // ÍCONE PARA BOTAR FEITO

function TasksBlocks({ nameTask , onRemove}) {

    const [isCompleted, setIsCompleted] = useState(false)

    function completeTask() {
        setIsCompleted(!isCompleted)
    }

    function removeTask() {
        onRemove(nameTask)
    }

    return (
        <div>
            <li className={isCompleted? styles.completed : ''}>
                <div className={styles.tasks_actions}>
                    <span>
                        <SlCheck size="23px" className={styles.complete} onClick={completeTask} />
                    </span>
                    {nameTask}
                    <span>
                        <FiTrash2 size="23px" className={styles.trash} onClick={removeTask} />
                    </span>
                </div>
            </li>
        </div>
    )
}

export default TasksBlocks