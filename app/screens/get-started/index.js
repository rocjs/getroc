import React from 'react';

export default class GetStarted extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={ { __html: require('../../../docs/GETSTARTED.md') } }
                />
            </div>
        );
    }
}
