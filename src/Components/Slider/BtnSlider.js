import React from 'react';
import './Slider.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Import both arrow icons

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            className={`btn-slide ${direction === 'next' ? 'next' : 'prev'}`}
            onClick={moveSlide}
        >
            {direction === 'next' ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
    );
}
