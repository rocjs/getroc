import React from 'react';
import { IndexLink, Link } from 'react-router';
import Search from '../search';
import styles from './style.scss';
import gh from './assets/gh.png';

export default class Menu extends React.Component {
    render() {
        return (
            <div className={styles.navbar}>
                <div className="wrapper">
                    <ul>
                        <li className={ styles.item }>
                            <IndexLink to="/" className={styles.a} activeClassName={styles.active}>Roc</IndexLink>
                        </li>
                        <li className={ styles.item }>
                            <Link to="/start/" className={styles.a} activeClassName={styles.active}>Get started</Link>
                        </li>
                        <li className={ styles.item }>
                            <Link to="/why/" className={styles.a} activeClassName={styles.active}>Why</Link>
                        </li>
                        <li className={ styles.item }>
                            <a
                                href="https://github.com/rocjs/roc/blob/master/docs/README.md"
                                className={styles.a}
                            >
                                Docs
                            </a>
                        </li>
                        <li className={`${styles.item} ${styles.extra}`}>
                            <a
                                href="https://github.com/search?q=org%3Arocjs+roc-plugin+OR+roc-package"
                                className={styles.a}
                            >
                                Extensions
                            </a>
                        </li>
                        <li className={`${styles.item} ${styles.extra}`}>
                            <Search />
                        </li>
                    </ul>
                </div>
                <a className={ styles.gh } href="https://github.com/rocjs/roc/"><img src={gh} /></a>
            </div>
        );
    }
}
