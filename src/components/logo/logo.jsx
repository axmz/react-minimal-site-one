import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

const Logo = () => {

    return (
        <div className={"logo"}>
            <Link to="/" className={'logo__link'}>
                ARCH
        </Link>
        </div>
    )
}

export default Logo