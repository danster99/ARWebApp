import React from 'react'
import './Scanner.css';
import { useState, useEffect } from 'react';


export default function Scanner({item}) {
    var model = "obj: url(/models/"+{item}+"/"+{item}+".obj); mtl: url(/models/"+{item}+"/"+{item}+".mtl)";
    const {height, width} = useWindowDimensions();
    return(
        <div className="fill-window">
        <link rel="stylesheet" href="./Scanner.css"/>
            <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
            <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
            <script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script> 
            <script src="libs/inflate.min.js"></script>

            <div className="header">
                <img className="dasdasd" src="/images/logo-viar.jpg"/>
                <h1>ViAR</h1>
                <button className="back-button"><a href="/demo-client">BACK</a></button>
            </div>
            <div style={{display: 'block', position: 'absolute', left: '50%', top: '50%'}}>
                <div id="preloader" style={{width:'200%', backgroundColor:'#1c2237', visibility: 'visible',transform: 'translate(-50%, -50%)'}}>
                <img className="loader-image" src="/images/logo-viar.jpg" width="100" height="100" loading="lazy" />
                <h2 style={{display: 'block', color: 'white', fontFamily:'PT Sans', fontWeight: '100', width:'130%', position: 'absolute', left: '50%', transform:'translate(-50%, 0%)', textAlignLast:'center'}}>Loading your model...</h2>
                </div>
                <a-scene embedded arjs light="defaultLightsEnabled: false">
                <a-marker preset='custom' type='pattern' url='pattern-pp.patt'>
                    <a-entity
                    id="model"
                    position="0 0 -0.5"
                    scale="20 20 20"
                    material="shader: flat"
                    animation="property: rotation; dur: 15000; to: 0 360 0; easing: linear; loop: true"
                    obj-model={model}
                    ></a-entity>
                    <a-entity light="type: ambient; color: #FFF; intensity: 1.5"></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
                </a-scene>
            </div>
        </div>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function useWindowDimensions() {
const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

useEffect(() => {
    function handleResize() {
    setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

return windowDimensions;
}
