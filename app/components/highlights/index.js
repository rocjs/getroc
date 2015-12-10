import React from 'react';

import styles from './style.scss';

import Highlight from './highlight';

export default class Highlights extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className="wrapper">
                    <h2>Highlights</h2>
                    <Highlight image="consistency">
                        <h3>Consistency</h3>
                        Handle all your apps and components in a consistent way.
                    </Highlight>
                    <Highlight image="composition">
                        <h3>Composition</h3>
                        Roc bundles your favourite modern development technologies into extendable modules ready for use.
                    </Highlight>
                    <Highlight image="automation">
                        <h3>Automation</h3>
                        `build`, `develop` and `test` using dedicated and easy-to-use tooling.
                    </Highlight>
                    <Highlight image="developerux">
                        <h3>Developer UX</h3>
                        Roc extensions for a given composition provide the best developer experience out of the box.
                    </Highlight>
                    <Highlight image="dynamicconfig">
                        <h3>Dynamic Configuration</h3>
                        Dedicated configuration system that integrates directly with the Roc `cli`.
                    </Highlight>
                    <Highlight image="reduceboiler">
                        <h3>Reduce boilerplate</h3>
                        The versioned extensions embed boilerplate so that it does not pollute your application.
                    </Highlight>
                    <Highlight image="reactredux">
                        <h3>React w/ Redux</h3>
                        One of the most developed extensions provides a great starting point for a `universal` web application using `react`, `react-router` and `redux`.
                    </Highlight>
                </div>
            </div>
        );
    }
}
