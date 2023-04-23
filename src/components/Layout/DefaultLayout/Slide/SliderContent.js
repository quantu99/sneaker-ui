import React from 'react';
function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {imageSlider.map((slide, index) => (
                <div key={index} className={index === activeIndex ? 'slides active' : 'inactive'}>
                    <img className="slide-image" src={slide.urls} />
                    <h2 className="slide-title">{slide.title}</h2>
                    <h3 className="slide-description">{slide.description}</h3>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
