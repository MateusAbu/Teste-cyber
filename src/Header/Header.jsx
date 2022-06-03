import React from 'react'
import { Icon } from '@iconify/react';
import './Header.css'

function Header() {
    return (
        <div className="header">

            <nav className="header-options">

                <a href="/" className='option'>Home</a>
                <a href="/sobre" className='option'>Sobre</a>
                <a href="/tabela" className='option'>Tabela</a>
                <a href="/faleconosco" className='option'>Fale Conosco</a>
                <a href="/entrar" className='option'>Entrar <Icon style={{ marginLeft: 35, width: 25, height: 25 }} icon="line-md:account" /></a>

            </nav>

        </div>
    )
}

export default Header