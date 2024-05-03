import React from 'react';
import FOTO3 from './imagens/FOTO3.jpg';
import FOTO6 from './imagens/FOTO6.jpg';
import FOTO7 from './imagens/FOTO7.jpg';
import FOTO5 from './imagens/FOTO5.jpg';
import FOTO4 from './imagens/FOTO4.jpg';
import HOME from './imagens/HOME.jpg';

function Home(){
    return(
        <>
        <div className='texto'>
            <h1>Bem-vindo à Página Inicial da nossa AV2</h1>
            <p id='conhecer'>Conheça os melhores cosplays do SESI/SENAI</p>
        </div>
        <div className='imagens-container' />
            <div className='fotos'/>
                <img src={FOTO3} id='monica' />
                <img src={FOTO6} id='leandro' />
                <img src={FOTO7} id='clarotim' />
                <img src={FOTO5} id='tigrinho' />
                <img src={FOTO4} id='saojoao' />
                <img src={HOME} id='tresn' />
        <div className='textoses'>
            <h2 id='damonica'>Povo da Turma da Mônica</h2>
            <h2 id='foveiras'>Foveiras e o Teacher TOP!!!</h2>
            <h2 id='claroflanela'>As operados Tim e Claro + Flanelinhas</h2>
            <h2 id='tigrinhotop'>Tigrinho man</h2>
            <h2 id='dollynho'>Dollynho e não sei as outras duas</h2>
            <h2 id='turmatresn'>A turma mais f$#% do SESI/SENAI</h2>
        </div>
        </>
    )
}

export default Home;