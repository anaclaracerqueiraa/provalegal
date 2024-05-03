import React from "react";
import SESI from './imagens/SESI.png'

function Footer (){
    return(
        <><div className='footer-container' /><footer className="el-footer">
            <p id='coisinhaoutra'>© 2024 Todos direitos reservardos ao povo 3°N/informática para internet.</p>
            <p id="coisinha"> Contato: osmelhores@sesisenai.com</p>
            <img src={SESI} id='sesi' />
        </footer></>
    )
}

export default Footer;