import React from 'react';

const hero = require('../../../public/HERO.md');

export default class GetStarted extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Get started</h1>
                <p>
                    Get started components here!
                </p>
                <div className="markdown-body" dangerouslySetInnerHTML={{__html: hero}} />
            </div>
        );
    }
}
