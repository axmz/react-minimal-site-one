import React, { useState, useCallback, useReducer } from 'react'
import './styles.scss'
import Icon from './icon'
import Input from './input'
import Results from './results'

// const defaultState = {
//     hidden: true,
//     input: "",
// }
const Search = ({hidden, setHidden}) => {
    // const [state, dispatch] = useReducer(reducer, defaultState)
    const [input, setInput] = useState("")

    const handleInput = (e) => setInput(e.target.value)
    const toggleVisibility = () => setHidden(p => !p)

    const cls = hidden ? "search__overlay hidden" : "search__overlay"

    return (
        <div className="search">
            <Icon onClick={toggleVisibility} hidden={hidden} />
            <div className={cls}>
                <Input hidden={hidden} input={input} handleInput={handleInput} />
                <Results hidden={hidden} input={input} setHidden={setHidden}/>
            </div>
        </div>
    )
}

export default Search