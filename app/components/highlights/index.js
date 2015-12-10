import React from 'react';

import styles from './style.scss';

import Highlight from './highlight';

export default class Highlights extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className="wrapper">
                    <h3>Highlights</h3>
                    <Highlight image="consistency">
                        <h4>Consistency</h4>
                        Handle all your apps and components in a consistent way.
                    </Highlight>
                    <Highlight image="composition">
                        <h4>Composition</h4>
                        Roc bundles your favourite modern development technologies
                        into extendable modules ready for use.
                    </Highlight>
                    <Highlight image="automation">
                        <h4>Automation</h4>
                        <em>build</em>, <em>develop</em> and <em>test</em> using dedicated and easy-to-use tooling.
                    </Highlight>
                    <Highlight image="developerux">
                        <h4>Developer UX</h4>
                        Roc extensions for a given composition provide the best developer experience out of the box.
                    </Highlight>
                    <Highlight image="dynamicconfig">
                        <h4>Dynamic Configuration</h4>
                        Dedicated configuration system that integrates directly with the Roc CLI.
                    </Highlight>
                    <Highlight image="reduceboiler">
                        <h4>Reduce boilerplate</h4>
                        The versioned extensions embed boilerplate so that it does not pollute your application.
                    </Highlight>
                    <Highlight image="reactredux">
                        <h4>React + Redux</h4>
                        One of the most developed extensions provides a great starting point for a universal web
                        application using <em>React</em>, <em>React Router</em> and <em>Redux</em>.
                    </Highlight>
                </div>
            </div>
        );
    }
}
