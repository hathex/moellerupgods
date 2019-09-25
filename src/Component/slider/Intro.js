import React from 'react'
import sliders1 from '../../img/slider/banner1_srcset-large.png';
import sliders2 from '../../img/slider/banner2_srcset-large.png';
import sliders3 from '../../img/slider/Mlleruplogo200x200transp1_srcset-large.png'

const Intro = () => {
    return (

        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliders1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sliders2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sliders3} className="d-block w-100" alt="..." />
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

    )
}

export default Intro
