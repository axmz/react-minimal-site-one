import React from 'react'
import './styles.scss'
import image from './fi.jpg'

const PostOne = () => {

    return (
        <div className="postone">
            <div className="postone__image-wrapper">
                <img className="postone__image" src={image}></img>
            </div>
            <div className="postone__info">
                <h1>House in Frutillar</h1>
                <p>Duarte Fournies Arquitectos</p>
                <p>2019</p>
                <p>The site is located in a native forest, at the basin of the Llanquihue lake, in the south of Chile. This area is characterized by its natural landscape, lush vegetation and cold / rainy weather.</p>
            </div>
        </div>
    )
}

export default PostOne
