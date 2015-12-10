import React from 'react';
import styles from './style.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <span className={styles.left}>
                    <a href="https://github.com/vgno/roc">Github</a>
                </span>
                <span className={styles.right}>
                    by <a href="http://www.vg.no">VG</a>
                </span>
            </div>
            )
    }
}