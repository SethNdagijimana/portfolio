import React from 'react'
import {init} from 'ityped'
import { useEffect, useRef } from 'react'
import "./Intro.scss"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"]
        })

    },[])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/man4.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                  <h2>Hi There, I'm</h2>
                  <h1>Seth</h1>
                  <h3>Freelance <span ref={textRef}></span></h3>
                </div>  
                  <a href="#portfolio">
                   <img src="assets/down.png" alt="" />
                   </a> 
            </div>
        </div>
    )
}
