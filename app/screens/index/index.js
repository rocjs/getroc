import React from 'react';

import Hero from '../../components/hero';
import Highlights from '../../components/highlights';
import Extensions from '../../components/extensions';
import Readmore from '../../components/readmore';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Highlights />
                <Extensions />
                <Readmore />
            </div>
        );
    }
}
