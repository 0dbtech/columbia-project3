import React from 'react';

function CarouselComponent() {
    return (
        <div className="carousel-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="carousel-img d-block w-100" src="https://timedotcom.files.wordpress.com/2015/04/dog-child.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-img d-block w-100" src="https://coastalgsr.org/test/Images/Main_page/Carousel/Header1.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-img d-block w-100" src="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/brain%20emotions.jpg?itok=U5bUcoT1"alt="Third slide" />
                    </div>
                    
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                
            </div>
        
        </div>
    );
}

export default CarouselComponent;