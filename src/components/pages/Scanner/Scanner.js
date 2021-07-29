import React from 'react'
import './Scanner.css';
import { useState, useEffect } from 'react';
import { THREE } from 'aframe';
import ARjs from 'ar.js'
import AppendHead from 'react-append-head'
import 'aframe-extras'
import { AFrame } from 'aframe';


export default function Scanner({item}) {
    const params = new URLSearchParams(document.location.search);
    item = params.get("item");
    var model = "obj: url(/models/"+item+"/"+item+".obj); mtl: url(/models/"+item+"/"+item+".mtl";
    return(
        <div className="fill-winow">
            <AppendHead>
            <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
                <script src="libs/inflate.min.js"></script>
            </AppendHead>
            <div className="header">
                <img className="dasdasd" src="/images/logo-viar.jpg" style={{height:'70%', borderRadius:'50%'}}/>
                <button className="back-button"><a href="/demo-client">BACK</a></button>
            </div>
            <div style={{display: 'block', position: 'absolute', left: '50%', top: '50%'}}>
                {/* <div id="preloader" className="preloader-invisible">
                <img className="loader-image" src="/images/logo-viar.jpg" width="100" height="100" loading="lazy" />
                <h2 style={{display: 'block', color: 'white', fontFamily:'PT Sans', fontWeight: '100', width:'130%', position: 'absolute', left: '50%', transform:'translate(-50%, 0%)', textAlignLast:'center'}}>Loading your model...</h2>
                </div> */}
                <script>console.log({model})</script>

                <a-scene embedded arjs light="defaultLightsEnabled: false" >
                    <a-marker preset='custom' type='pattern' url='pattern-pp.patt'>
                        <a-entity
                        id="model"
                        obj-model={model}
                        position="0 0 -0.5"
                        scale="20 20 20"
                        material="shader: flat"
                        animation="property: rotation; dur: 15000; to: 0 360 0; easing: linear; loop: true"
                        ></a-entity>
                        <a-entity light="type: ambient; color: #FFF; intensity: 1.5"></a-entity>
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
                {/* <script>
                    const params = new URLSearchParams(document.location.search);
                    const s = params.get("item");
                    var script = document.getElementById("model").setAttribute('obj-model',"obj: url(/models/"+s.toString()+"/"+s.toString()+".obj); mtl: url(/models/"+s.toString()+"/"+s.toString()+".mtl)");
                    const loader = new THREE.OBJLoader();
                    loader.load("/models/"+s.toString()+"/"+s.toString()+".obj", function()
                    {
                        document.getElementById("preloader").setAttribute("style", "visibility: hidden; height: 0%")
                    })
                </script> */}
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
