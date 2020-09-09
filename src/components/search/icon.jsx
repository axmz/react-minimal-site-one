import React from 'react'
import search from './search.svg'
import cross from './close.svg'
// import cross from './close2.svg'

const Icon = ({ onClick, hidden }) => {
    const src = hidden ? search : cross
    return (
        <div onClick={onClick} className="search__icon-container">
            <img className={"search__icon"} src={src} alt="Search Icon" />
        </div>
    )
}

export default Icon