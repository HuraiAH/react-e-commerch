import React from 'react';
import './carousel.css'
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider4.jpg';
import slider5 from '../../images/slider5.jpg';

const carousel= () => {
    return (
        
            <div id="carouselExampleIndicators" className="carousel slide container-fluid mt-3" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="/"/>
            </div>
            <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={slider4} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={slider5} className="d-block w-100" alt="..."/>
            </div>
        </div>
       
        </div>
            
        
    );
}

export default carousel;