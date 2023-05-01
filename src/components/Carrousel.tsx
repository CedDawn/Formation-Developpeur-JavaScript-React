import React, {useState} from 'react'
import '../styles/Carrousel.css';
import { LogementProps } from '../types/LogementProps';

export const Carrousel = ({ logement } :LogementProps) => {
    
    const slides = logement.pictures

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='carrousel'>
            {slides.length > 1 &&
                <>
                    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={prevSlide} className="left-arrow">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>
                    <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={nextSlide} className="right-arrow">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                    </svg>
                </>
            }
            
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide} alt="" className="image" />
                        )}
                    </div>
                )
            })}
        </section>
    )
}