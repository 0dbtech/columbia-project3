
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
function SearchComponent() {
    return (
        <div>
            <div className="search-container">
                <p>Find buddies in your neighborhood</p>
            </div>
            <InputGroup className="mb-3">
                <div className="search-bar">
                    <div className="inputWithIcon">
                        <FormControl className="input"
                            placeholder="zip code"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <i class="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                    </div>
                </div>
                <InputGroup.Append>
                    <Button variant="outline-secondary" className="search-button"><i class="fa fa-search"></i></Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    );
}

export default SearchComponent;

{/* // <form className="example" action="action_page.php">
            //     <h5>Find buddies in your neighborhood</h5>
            //     <div class="search-bar">
            //         <div class="inputWithIcon">
            //             <input type="text" placeholder="zip code" name="search" />
            //             <i class="fas fa-map-marker-alt icon" aria-hidden="true"></i>
            //         </div>
            //         <div>
            //             <button type="submit"><i class="fa fa-search"></i></button>
            //         </div>
            //     </div>
            // </form> */}




