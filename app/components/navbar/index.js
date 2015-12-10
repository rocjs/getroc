import React from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <div className={styles.navbar}>
                <div className="wrapper">
                    <ul>
                        <li>
                            <Link to="/">Roc</Link>
                        </li>
                        <li>
                            <Link to="start">Get started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
