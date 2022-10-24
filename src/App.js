import './App.css';
//importar hooks
import { useState, useEffect, useRef } from 'react';
//import framer-motion
import {motion} from 'framer-motion';
//import imagens
import imagem1 from '../src/imagens/01.jpg';
import imagem2 from '../src/imagens/02.jpg';
import imagem3 from '../src/imagens/03.jpg';
import imagem4 from '../src/imagens/04.jpg';

import '../src/responsividade/responsividade.css'


//criando array de imagens
const imagensArray = [imagem1, imagem2, imagem3, imagem4];

export default function App(){
  //criando referencia quando eu acessar carrossel quero estar acessando a motion.div ref=carrossel
  const carrossel = useRef();
  //criar um stado para armazena a largura do carrossel
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carrossel.current.scrollWidth, carrossel.current.offsetWidth);
    //safafasdfsf
    setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth)
  },[])

  return (
    <div className='app'>
      <div className='textoPrincipal'>
        <h1>Página carrossel de imagens</h1>
      </div>
      <motion.div ref={carrossel} className='carrossel' whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner' 
        drag="x" dragConstraints={{right:0, left: -width}}
        initial={{x: 0}}
        animate={{x:0}}
        transition={{duration:0.5}}  >

          {imagensArray.map(mostrarImagem => (
            <motion.div className='imagem' key={mostrarImagem}>
               <img src={mostrarImagem} alt='texto do alt'></img> 
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  )
}
