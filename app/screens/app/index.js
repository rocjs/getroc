import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import styles from './style.scss';

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className={styles.main}>
                <Helmet
                    link={[{
                        rel: 'icon', href: '/favicon.png'
                    }, {
                        href: 'http://fonts.googleapis.com/css?family=Lato:100,300,400,600,700,800',
                        rel: 'stylesheet',
                        type: 'text/css'
                    }, {
                        href: 'http://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700',
                        rel: 'stylesheet',
                        type: 'text/css'
                    }]}
                />
                <Navbar />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}
