import React from 'react';
import { Router, Route, Link } from 'react-router';
import styles from './style.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <div className={styles.menu}>
                <Link to="/">Roc</Link>
                <Link to="start">Get started</Link>
            </div>
        );
    }
}
