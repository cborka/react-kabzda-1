import React from 'react';
import styles from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
    debugger
    let someError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (someError? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {someError && <span className={styles.error}>{meta.error}</span> }
        </div>

    )
};