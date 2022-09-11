import React from 'react';

import styles from './TitleWithCounter.module.css';

export const TitleWithCounter = ({ title, amountTasks, amountCompletedTasks, isCompletedTitle }) => {
    const completedTitleClass = isCompletedTitle && styles.completed

    const showAmountTasks = () => {
        if (amountCompletedTasks > 0) {
            return <span>{`${amountCompletedTasks} de ${amountTasks}`}</span>
        }
        
        if (amountTasks > 0 && !isCompletedTitle) {
            return <span>{amountTasks}</span>
        }

        return <span>0</span>
    }

    return (
        <strong className={completedTitleClass}>
            {title} 
            {showAmountTasks()}
        </strong>
    )
}
