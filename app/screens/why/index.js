import React from 'react';

export default class Why extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={ { __html: require('../../../docs/WHY.md') } }
                />
            </div>
        );
    }
}
