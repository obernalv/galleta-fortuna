import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomArr from './utils/getRandomArr'
import PhraseCard from './component/PhraseCard'
import BtnPhrase from './component/BtnPhrase'
import arrImages from './utils/arrImages.json'
import getColorCard from './utils/getColorCard'

function App() {

  const initialValue = getRandomArr(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue )
  
  const initialImage = getRandomArr(arrImages) 
  const [imageSelected, setImageSelected] = useState(initialImage)

  console.log('imageSelected:', imageSelected);

  const backgroundColor = getColorCard(imageSelected)


  
  const objStyle = {
    backgroundImage: `url("img/fondo${ imageSelected }.png")`
  }

  return (
    <div className='app' style={objStyle}>
      <div className='title__container'>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      </div>
      
      <article className='app__card' style={{ backgroundColor }}>
            <PhraseCard phraseRandom={phraseRandom} />
            <BtnPhrase 
              setPhraseRandom={setPhraseRandom} 
              setImageSeleted={setImageSelected}
            />
      </article>
      
    </div>
  )
}

export default App
