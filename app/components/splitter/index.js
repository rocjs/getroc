import React from 'react';

import styles from './style.scss';

export default class Splitter extends React.Component {
    static propTypes = {
        children: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div className={ styles.splitter }>
                { this.props.children }
            </div>
        );
    }
}
