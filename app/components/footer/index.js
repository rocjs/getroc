import React from 'react';
import styles from './style.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className="wrapper">
                    <span className={styles.left}>
                        <a className={styles.github} href="https://github.com/vgno/roc"></a>
                    </span>
                    <span className={styles.right}>
                        An open source project by
                        <a className={styles.vg} href="http://www.vg.no"></a>
                    </span>
                </div>
            </div>
        );
    }
}
