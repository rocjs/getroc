import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

export default class Splitter extends React.Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className={ styles.splitter }>
                { this.props.children }
            </div>
        );
    }
}
