import React from 'react';
import styles from './style.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className="wrapper">
                    <span className={styles.left}>
                        <a className={styles.github} href="https://github.com/rocjs/roc"></a>
                    </span>
                    <span className={styles.right}>
                        An open source project by
                        <a className={styles.vg} href="http://tech.vg.no"></a>
                    </span>
                    <span className={styles.iconCredits}>
                        Icons by <a href="http://www.flaticon.com/authors/freepik">Freepik</a>
                        from <a href="http://flaticon.com">Flaticon</a>
                    </span>
                </div>
            </div>
        );
    }
}
