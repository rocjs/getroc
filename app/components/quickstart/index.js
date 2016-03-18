import React from 'react';
import { Link } from 'react-router';

import styles from './style.scss';

export default class Quickstart extends React.Component {
    render() {
        return (
            <div className={styles.quickstart}>
                <div className="wrapper">
                    <h3>Get started</h3>

                    <div className={styles.columnWrapper}>
                        <div className={styles.column}>
                            <div
                                className="markdown-body"
                                dangerouslySetInnerHTML={{__html: require('../../../docs/QUICKSTART-1.md')}}
                            />
                        </div>
                        <div className={styles.column}>
                            <div
                                className="markdown-body"
                                dangerouslySetInnerHTML={{__html: require('../../../docs/QUICKSTART-2.md')}}
                            />
                        </div>
                    </div>
                    <Link className={styles.moreButton} to="start/">Learn more</Link>
                </div>
            </div>
        );
    }
}
