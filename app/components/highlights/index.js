import React from 'react';

import styles from './style.scss';

export default class Highlights extends React.Component {
    render() {
        return (
            <div className={styles.highlights}>
                <h1>Highlights</h1>
                <div className={styles.column}>
                    Bruk
                </div>
                <div className={styles.column}>
                    ROC
                </div>
                <div className={styles.column}>
                    nå!
                </div>
            </div>
        );
    }
}