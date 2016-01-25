import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './style.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <div className={styles.navbar}>
                <div className="wrapper">
                    <ul>
                        <li>
                            <IndexLink to="/" className={styles.a} activeClassName={styles.active}>Roc</IndexLink>
                        </li>
                        <li>
                            <Link to="/start/" className={styles.a} activeClassName={styles.active}>Get started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
