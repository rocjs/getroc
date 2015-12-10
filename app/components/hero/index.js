import React from 'react';
import styles from './style.scss';

export default class Hero extends React.Component {
    render() {
        return (
            <div className={styles.hero}>
                <div className="wrapper">
                    <h1>Roc</h1>
                    <h2>Modern webdevelopment system</h2>
                    <code className={styles.install}>npm install roc -g</code>
                </div>
            </div>
        );
    }
}
