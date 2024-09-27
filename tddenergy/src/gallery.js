import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import invertorImage from './divine construction/invertor.jpg'; // {{ edit_1 }}
import indoorlightingImage from './divine construction/indoorli.jpg'; // {{ edit_2 }}
import product3Image from './divine construction/pole.jpg'; // {{ edit_3 }}
import product4Image from './divine construction/solar.jpg'; 
import product6Image from './divine construction/solar2.jpg'; // {{ edit_4 }}
import product5Image from './divine construction/transformer.jpg'; // {{ edit_5 }}
 // Ensure Bootstrap JS is included


const ImageCarousel = () => {
    const images = [
      invertorImage,
      indoorlightingImage,
      product3Image,
      product4Image,
      product6Image,
      product5Image,
        
        // Add more image URLs as needed
    ];

    return (
        <div className='container d-flex justify-content-center'>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={image} className="d-block w-75" style={{ height: '600px' }} alt={`Slide ${index + 1}`} /> 
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
};

export default ImageCarousel;
