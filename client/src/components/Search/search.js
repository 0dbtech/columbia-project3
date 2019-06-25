
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

class SearchComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showResutls: false
        };
    }
    
    render(){ 
        return (
        <div>
            <div className="search-container">
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
                <Button className="search-button" variant="outline-secondary"><Link to='/results'><i className="fa fa-search"></i></Link></Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        </div> 
    )
}

    showResutls() {
        console.log("I am clicked ... ")
        this.state.showResutls = true
    }


}

export default SearchComponent;


