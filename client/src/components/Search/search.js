
import React from 'react';

function SearchComponent() {
    return (
        <div>
            <form className="example" action="action_page.php">
                <h5>Find buddies in your neighborhood</h5>
                <div class="search-bar">
                    <div class="inputWithIcon">
                        <input type="text" placeholder="zip code" name="search" />
                        <i class="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                    </div>
                    <div>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default SearchComponent;

{/* <div className="search-container">
            <h5>Find buddies in your network</h5>
            <div className="col-sm-10 col-md-10 col-lg-10">
                <div className="input-group">
                
                    <input <h1><i class="fas fa-map-marker-alt"></i>zip code</h1> type="text" className="form-control"></input>
                    
                        <button className="btn btn-secondary" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            </div> */}