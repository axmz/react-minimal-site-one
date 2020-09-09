import React from 'react'
import './styles.scss'
import image from './bricks.jpg'

const PostTwo = () => {

    return (
        <div className="posttwo">
            <div className="posttwo__info">
                <h1>Melopee School</h1>
                <p>XDGA - Xaveer De Geyter Architects</p>
                <p>2020</p>
                <p>In the harbour area, a narrow stretch of land along a dock is freed from port activities. A very simple ‘chopstick’ urban plan is developed by O.M.A. in which green open pockets alternate with dense construction.</p>
            </div>
            <div className="posttwo__image-wrapper">
                <img className="posttwo__image" src={image} alt="architecture" />
            </div>
        </div>
    )
}

export default PostTwo