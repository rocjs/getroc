import React from 'react';

export default class Docs extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={ { __html: require('../../../docs/DOCS.md') } }
                />
            </div>
        );
    }
}
