import React from 'react';

function HeaderComponent() {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-sm-1 col-md-1 col-lg-1">
                    <h1>PAW</h1>
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Please enter your address..." />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1 col-md-1 col-lg-1">
                    <div className="d-flex justify-content-around">
                        <a>SignIn</a>
                        <a>SignUp</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;