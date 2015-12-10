import React from 'react';

const getstarted = require('../../../docs/GETSTARTED.md');

export default class GetStarted extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="markdown-body" dangerouslySetInnerHTML={{__html: getstarted}} />
            </div>
        );
    }
}
