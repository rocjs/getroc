import React from 'react';

import styles from './style.scss';

import Highlight from './highlight';

export default class Highlights extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className="wrapper">
                    <h1>Highlights</h1>
                    <Highlight image="bruk">
                        Bruk
                    </Highlight>
                    <Highlight image="ROC">
                        ROC
                    </Highlight>
                    <Highlight image="naa">
                        nå!
                    </Highlight>
                </div>
            </div>
        );
    }
}
