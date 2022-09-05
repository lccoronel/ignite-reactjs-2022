import React from 'react';

import styles from './TitleWithCounter.module.css';

export const TitleWithCounter = ({ title, value, isCompletedTitle }) => {
    const completedTitleClass = isCompletedTitle && styles.completed

    return (
        <strong className={completedTitleClass}>
            {title} 
            <span>{value}</span>
        </strong>
    )
}
