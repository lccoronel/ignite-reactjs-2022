import React from 'react';

import emptyListImg from '../assets/Clipboard.png'
import styles from './EmptyList.module.css';

export const EmptyList = () => {
    return (
        <div className={styles.emptyListWrapper}>
            <img src={emptyListImg} alt="Lista vazia" />

            <strong className={styles.title}>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}
