import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included

const ImageCarousel = () => {
    const images = [
        
        'src/divine construction/pole.jpg', // Added new image
        'src/divine construction/solar.jpg', // Added new image
        'src/divine construction/solar2.jpg', // Added new image
        'src/divine construction/team.jpg', // Added new image
        'src/divine construction/indoorli.jpg', // Added new image
        'src/divine construction/transformer.jpg', // Added new image
        
        // Add more image URLs as needed
    ];

    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
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
    );
};

export default ImageCarousel;
