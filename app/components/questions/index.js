import React from 'react';
import styles from './style.scss';

export default class Quickstart extends React.Component {
    render() {
        return (
            <div className={styles.quickstart}>
                <div className="wrapper">
                    <h3>Common questions</h3>
                    <div className={styles.row}>
                        <div
                            className="markdown-body"
                            dangerouslySetInnerHTML={ { __html: require('../../../docs/QUESTIONS.md') } }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
