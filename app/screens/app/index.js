import React from 'react';

import Navbar from '../../components/navbar';

import styles from './style.scss';

export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div className={styles.main}>
                <Navbar />
                { this.props.children }
            </div>
        );
    }
}
