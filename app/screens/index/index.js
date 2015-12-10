import React from 'react';

import Hero from '../../components/hero';
import Highlights from '../../components/highlights';
import Quickstart from '../../components/quickstart';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Highlights />
                <Quickstart />
            </div>
        );
    }
}
