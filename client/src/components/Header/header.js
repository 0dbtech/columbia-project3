import React from 'react';

function HeaderComponent() {
    return (
        <div>
            
            <div className="header-container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <h1><i class="fas fa-paw"></i><a href="#">Buddy</a></h1>
                </div>
                {/* <div className="col-sm-10 col-md-10 col-lg-10">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Please enter your address..." />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#CollapsNavbar">
                &#9776;</button>
                // <div class="collapse navbar-toggleable-xs" id="collapseHeader"> */}
                
                <div className="col-sm-1 col-md-1 col-lg-1">
                    <div className="d-flex justify-content-around">
                        <a href="#">Signin</a>/<a href="#">Signup</a>
                    
                    </div>
                    {/* </div> */}
                </div>
                </div>

            </div>
        </div>
    );
}

export default HeaderComponent;