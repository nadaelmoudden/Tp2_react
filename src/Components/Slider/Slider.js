import React, { useState } from 'react'; // Import useState from 'react'
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider.js';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={obj.id}>
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`} alt={`Image ${index + 1}`} />
                    </div>
                );
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
    );
}
