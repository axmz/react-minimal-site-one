import React from 'react'
import './styles.scss'
import image from './galerie.jpg'

const Postthree = () => {

    return (
        <div className="postthree">
            <div className="postthree__image-wrapper">
                <img className="postthree__image" src={image}></img>
            </div>
            <div className="postthree__info">
                <h1>New Gallery and Casemates</h1>
                <p>Bevk Perovic arhitekti</p>
                <p>2019</p>
                <p>The project is a result of a competition held in 2016 that set the task of making the casemates, an ammunition storage structure of the medieval fortress accessible to the general public in the form of new cultural centre/exhibition venue for the small city of Wiener Neustadt.</p>
            </div>
        </div>
    )
}

export default Postthree

