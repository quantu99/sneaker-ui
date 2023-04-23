import React, { useState, useEffect } from 'react';
import Button from '../../../../Button/Button';
import SliderContent from './SliderContent';
import imageSlider from './imageSlider';
import Arrows from './Arrows';
import Dots from './Dots';
import { Link } from 'react-router-dom';
import './slider.css';
const len = imageSlider.length - 1;
function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    // useEffect(() => {
    //     setInterval(() => {
    //         setActiveIndex((prev) => prev + 1);
    //         console.log('al');
    //         if (activeIndex > 5) setActiveIndex(0);
    //     }, 1000);
    // }, []);
    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Button to="/sneakers">Shop now</Button>

            <Dots
                activeIndex={activeIndex}
                imageSlider={imageSlider}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider;
