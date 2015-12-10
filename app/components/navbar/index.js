import React from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <Link className={styles.a} to="/">Roc</Link>
                <Link className={styles.a} to="start">Get started</Link>
            </div>
        );
    }
}
