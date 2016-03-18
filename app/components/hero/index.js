import React from 'react';
import styles from './style.scss';
import logo from './assets/logo.png';

export default class Hero extends React.Component {
    render() {
        return (
            <div className={styles.hero}>
                <div className="wrapper">
                    <img src={logo} className={styles.logo} alt="Roc logo" />
                    <h2>Modern web development system</h2>
                    <code className={styles.install}>npm install -g roc@1.0.0-beta3</code>
                </div>
            </div>
        );
    }
}
