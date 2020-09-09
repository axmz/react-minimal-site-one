import React, {useState} from 'react'
import './styles.scss'
import Logo from '../logo/logo'
import Search from '../search'
import HeaderMark from './mark'


const Header = ({hidden, setHidden}) => {
    return (
        <>
        <div className={"header"}>
            <HeaderMark />
            <div className="header__container container">
                <Logo />
                <Search hidden={hidden} setHidden={setHidden} />
            </div>
        </div>
        <div className="placeholder"/>
        </>
    )
}

export default Header