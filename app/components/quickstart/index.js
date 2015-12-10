import React from 'react';

import styles from './style.scss';

export default class Quickstart extends React.Component {
    render() {
        return(
            <div className={styles.quickstart}>
                <h1>Quickstart</h1>
                <div className={styles.column}>
                Install
                </div>
                <div className={styles.column}>
                Run
                </div>
                <div className={styles.column}>
                More
                </div>
            </div>
            );
    }
}
