import React, { useEffect, useState, useRef } from 'react'
import {useHistory, Link} from 'react-router-dom'
import pages from './pages'
import './styles.scss'

const Result = ({ name, tabIndex, setHidden}) => {
    const history = useHistory()
    const handleClick = () => setHidden(true)
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            e.stopPropagation()
            const path = e.target.pathname
            setHidden(true)
            history.push(path)
        }
    }

    return (
        <li className={'search__result'} >
            <Link tabIndex={0} to={"/" + name} onClick={handleClick} onKeyDown={handleKeyDown}>
                {name}
            </Link>
        </li> // tabIndex not working as expected
    )
}

const Results = ({ input, setHidden }) => {
    const [results, setResults] = useState(pages)
    const ref = useRef(null)

    useEffect(() => {
        const filtered = pages.filter(p => p.toLowerCase().includes(input.toLowerCase()))
        setResults(filtered)
    }, [input, setResults])

    return (
        <ul ref={ref} className="search__results">
            {results.map((r, i) => (<Result tabIndex={i} key={r} name={r} setHidden={setHidden} />))}
        </ul>
    )
}

export default Results