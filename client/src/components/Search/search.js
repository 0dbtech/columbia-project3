
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
         
            <div>
                <div className="search-container">
                <h1>{this.props.children}</h1>
                    <p>Find buddies in your neighborhood</p>
                </div>
                <div className="search-box">
                    <InputGroup className="mb-3">
                        <i className="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                        <FormControl className="input"
                            placeholder="zip code"
                            aria-label="zip code"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button className="search-button" variant="outline-secondary" onClick={this.handleClick}><i className="fa fa-search"></i></Button>
                        </InputGroup.Append>


                        <Button className="dog-register" variant="primary" size="lg" block>
                            register your dog
                            </Button>

                    </InputGroup>
                </div>
            </div>
        )
    }

    handleClick() {
        this.props.history.push('/dogs');
    }

}

export default withRouter(SearchComponent);


