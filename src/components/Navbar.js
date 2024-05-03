import React from 'react';
import SENAI from './imagens/SENAI.png';

function Navbar(){
    return(
        <div className='nav-container'>
        <nav className='navbar-bonita'>
            <img src={SENAI} id='senai'/>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/contato'>Contato</a></li>
            <li><a href='/QUEMSER'>Quem Somos</a></li>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar;