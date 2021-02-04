import React from 'react'
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, buttonPath, img, alt, imgStart}) 
{
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div class="row home__hiro-row" style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div class="col">
                            <div class="home_hero-text-wrapper">
                                <div class="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to={buttonPath}>
                                    <Button buttonSize='btn__wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="home_hero-img-wrapper">
                                <img src={img} alt={alt} class="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
