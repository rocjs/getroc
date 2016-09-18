import React from 'react';

import styles from './style.scss';
import docs from './assets/docs.svg';

export default class Readmore extends React.Component {
    render() {
        return (
            <div className={styles.readmore}>
                <div className="wrapper">
                    <img className={ styles.docs } src={ docs } alt="Read more docs" />
                    <a href="https://github.com/rocjs/roc/blob/next/docs/README.md" className={styles.moreButton}>Read documentation</a>
                </div>
           </div>
        );
    }
}
