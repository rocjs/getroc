import React from 'react';
import styles from './style.scss';
import logo from './assets/logo.png';

export default class Hero extends React.Component {
    render() {
        return (
            <div className={styles.hero}>
                <div className="wrapper">
                    <img src={logo} className={styles.logo} alt="Roc logo" />
                    <h2>JavaScript development system</h2>
                    <h3>Reusable building blocks for your projects</h3>
                    <code className={styles.install}>npm install -g roc</code>

                    <iframe src="https://ghbtns.com/github-btn.html?user=rocjs&repo=roc&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
                </div>
            </div>
        );
    }
}
