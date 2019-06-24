
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
function SearchComponent() {
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
                <Button className="search-button" variant="outline-secondary"><i className="fa fa-search"></i></Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        </div>
    );
}

export default SearchComponent;


