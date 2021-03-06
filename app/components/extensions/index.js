import React from 'react';

import reactRedux from './assets/reactredux.png';
import Splitter from '../splitter';
import styles from './style.scss';

export default class Extensions extends React.Component {
    render() {
        return (
            <div className={styles.extensions}>
                <Splitter>
                    <h3>Extensions</h3>
                </Splitter>
                <div className="wrapper">
                    <a href="https://github.com/rocjs/roc-package-web-app-react">
                        <img src={ reactRedux } />
                    </a>
                    <div>
                        <a
                            href="https://github.com/rocjs/roc-package-web-app-react/blob/master/GUIDE.md"
                            className={ styles.moreButton }
                        >
                            Read React+Redux guide
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/search?q=org%3Arocjs+roc-plugin+OR+roc-package"
                            className={ `${styles.moreButton} ${styles.lastMoreButton}` }
                        >
                            More extensions
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
