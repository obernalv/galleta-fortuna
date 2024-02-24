import getRandomArr from '../utils/getRandomArr'
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './styles/BtnPhrase.css'


const BtnPhrase = ({ setPhraseRandom, setImageSeleted }) => {

    const handleClick = ()=> {
      const phrase =  getRandomArr(phrases)
      setPhraseRandom(phrase)

      const background = getRandomArr(arrImages)
      setImageSeleted(background)
    }

    return (
        <button className='card__btn' onClick={handleClick}>Generar frase</button>
    )
}

export default BtnPhrase