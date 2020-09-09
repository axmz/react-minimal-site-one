import React, { useState, useEffect, useReducer, useRef } from 'react'

const Input = ({ input, handleInput }) => {
    const ref = useRef(null)
    useEffect(() => ref.current.focus())
    return (
        <input ref={ref} onChange={handleInput} className="search__input" type="search" placeholder="" value={input}></input>
    )
}

export default Input