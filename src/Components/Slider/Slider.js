import React, { useState } from 'react'
import "./Slider.css"
import dataSlider from "./dataSlider"
import BtnSlider from "./BtnSlider"

export default function Slider() {
    
    const [slider, setSlider] = useState({
        index: 1,
        changeSlide: false
    })

    //fonctions bouton suivant
    const nextSlide = () => {
        if (slider.index !== dataSlider.length && !slider.changeSlide) {
            setSlider({index: slider.index + 1, changeSlide: true})

            setTimeout(() => {
                setSlider({index: slider.index + 1, changeSlide: false})
            }, 400)
        }
        else if (slider.index === dataSlider.length && !slider.changeSlide) {
            setSlider({index: 1, changeSlide: true})

            setTimeout(() => {
                setSlider({index: 1, changeSlide: false})
            }, 400)
        }
    }

    //fonctions bouton précédent
    const prevSlide = () => {
        if (slider.index !== 1 && !slider.changeSlide) {
            setSlider({index: slider.index - 1, changeSlide: true})

            setTimeout(() => {
                setSlider({index: slider.index - 1, changeSlide: false})
            }, 400)
        }
        else if (slider.index === 1 && !slider.changeSlide) {
            setSlider({index: 5, changeSlide: true})

            setTimeout(() => {
                setSlider({index: 5, changeSlide: false})
            }, 400)
        }
    }

    //fonction bouton slider
    const moveDot = index => {
        setSlider({index: index, changeSlide: false})
    }
    
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slider.index === index + 1 ? "slide active-anim"
                        : "slide"}
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpeg`} alt="paysage" />             
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => {
                    return (
                        <div className={slider.index === index + 1 ? "dot active" : "dot"}
                            onClick={() => moveDot(index + 1)}
                        >
                        </div>
                    )
                })}
            </div>        
        </div>
    )
}
