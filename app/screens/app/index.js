import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

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
                <Footer />
            </div>
        );
    }
}
