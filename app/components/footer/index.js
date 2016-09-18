import React from 'react';
import styles from './style.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                An open source project by
                <a className={styles.vg} href="http://tech.vg.no"></a>
            </div>
        );
    }
}
