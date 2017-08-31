import React from 'react';

import styles from './style.scss';

export default class Highlight extends React.Component {
    static propTypes = {
        image: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <div className={ styles.highlight }>
                <div className={ styles.header }>
                    <div className={(this.props.image in styles) ? styles[this.props.image] : styles.image} />
                    { this.props.title }
                </div>
                <div className={ styles.text }>
                    { this.props.text }
                </div>
            </div>
        );
    }
}
