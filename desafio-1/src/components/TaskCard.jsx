import React from 'react';

import trashImg from '../assets/trash.png'
import successImg from '../assets/success.png'
import styles from './TaskCard.module.css';

export function TaskCard({ task, onCheckTask, onDeleteTask }) {
    const checkboxClassName = task.checked ? styles.checkboxChecked : styles.checkbox
    const descriptionClassName = task.checked ? styles.taskDescriptionChecked : styles.taskDescription

    return (
        <div className={styles.taskCardWrapper}>
            <button 
                className={checkboxClassName} 
                type="button" 
                onClick={() => onCheckTask(task.id)}
            >
                {task.checked && <img src={successImg} alt="Sucesso" />}
            </button>
            <p className={descriptionClassName}>
                {task.description}
            </p>
            <button 
                className={styles.trashButton} 
                type="button" 
                onClick={() => onDeleteTask(task.id)}
            >
                <img src={trashImg} alt="Excluir task" />
            </button>
        </div>
    )
}
