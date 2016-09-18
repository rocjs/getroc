import React from 'react';
import styles from './style.scss';
import searchIcon from './assets/search.png';

const DEFAULT_SEARCH = 'Search';
const GITHUB_SEARCH = 'https://github.com/search?utf8=%E2%9C%93&type=Repositories&ref=searchresults';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: DEFAULT_SEARCH
        };
    }

    updateSearch = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    clearSearch = () => {
        if (this.state.search === DEFAULT_SEARCH) {
            this.setState({
                search: ''
            });
        }
    }

    resetSearch = () => {
        if (this.state.search === '') {
            this.setState({
                search: DEFAULT_SEARCH
            });
        }
    }

    executeSearch = (e) => {
        e.preventDefault();

        const searchString = encodeURIComponent(`org:rocjs roc-plugin OR roc-package ${this.state.search}`);
        const newLocation = `${GITHUB_SEARCH}&q=${searchString}`;

        window.location = newLocation;
    }

    render() {
        return (
            <div className={styles.search}>
                <img src={searchIcon} />
                <form method="get" action={ GITHUB_SEARCH } onSubmit={ this.executeSearch }>
                    <input
                        name ="q"
                        type ="text"
                        value={ this.state.search }
                        onClick={ this.clearSearch }
                        onChange={ this.updateSearch }
                        onBlur={ this.resetSearch }
                    />
                </form>
            </div>
        );
    }
}
