import React, { Component } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import './AutoSearch.css';


class AutoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},

        };
        this.cancel = '';
    }

    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:3001/restaurants?q=${query}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios.get(searchUrl, {
            cancelToken: this.cancel.token,
        })
            .then((res) => {
                this.setState({
                    results: res.data,               
                });
            })
    };
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };
    renderSearchResults = () => {
        const { results } = this.state;
        if (Object.keys(results).length && results.length) {
            return (           
                <div className="results-container">
                    {results.map((result) => {
                        return (
                            <ListGroup>
                                <ListGroup.Item 
                                 className="list"
                                 action href="/File" >
                                    {result.name}
                                </ListGroup.Item>
                            </ListGroup>
                        );
                    })}                 
                </div>
            );
        }
    };
    render() {
        const { query } = this.state;
        return (           
            <div className="container"  >
                    <FormControl
                        className="search"
                        placeholder="Search Restaurant by Name Or Location.."
                        type="text"
                        value={query}
                        onChange={this.handleOnInputChange}
                    />    
                {this.renderSearchResults()} 
            </div>  
        )
    }
}
export default AutoSearch;
