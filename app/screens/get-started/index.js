import React from 'react';

const hero = require('../../../docs/GETSTARTED.md');

export default class GetStarted extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="markdown-body" dangerouslySetInnerHTML={{__html: hero}} />
            </div>
        );
    }
}
