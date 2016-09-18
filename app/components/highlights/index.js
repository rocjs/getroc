import React from 'react';

import styles from './style.scss';
import Highlight from './highlight';
import Splitter from '../splitter';

export default class Highlights extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <Splitter>
                    <h3>Highlights</h3>
                </Splitter>

                <div className="wrapper">
                    <Highlight
                        image="composition"
                        title="Composition"
                        text="Roc bundles your favourite modern development technologies into extensions ready for use."
                    />

                    <Highlight
                        image="computing"
                        title="Instant productivity"
                        text="Use established open source libraries from npm instantly without all the glue-code."
                    />

                    <Highlight
                        image="consistency"
                        title="Consistency"
                        text="Handle all your apps and components in a consistent way between projects and teams."
                    />

                    <Highlight
                        image="automation"
                        title="Automation"
                        text="Easy to use tooling provides commands like build, develop and test. Worry less about Webpack configurations."
                    />

                    <Highlight
                        image="developerux"
                        title="Developer Experience"
                        text="Roc extensions provide the best developer experience out of the box."
                    />

                    <Highlight
                        image="dynamicconfig"
                        title="Dynamic Configuration"
                        text="Dedicated configuration system that integrates directly with the Roc CLI makes your life simple."
                    />
                </div>
            </div>
        );
    }
}
