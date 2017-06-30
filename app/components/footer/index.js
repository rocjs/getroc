import React from 'react';
import styles from './style.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <div>
                    An open source project by
                </div>
                <div className={styles.logo}>
                    <a
                        className={styles.sch}
                        href="http://bytes.schibsted.com/"
                        rel="Schibsted Products and Tech blog"
                    >
                    </a>
                </div>
            </div>
        );
    }
}
