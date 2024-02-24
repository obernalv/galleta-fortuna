
import colors from './colors.json';

function getColorCard(imageSelected) {
  return colors[imageSelected] || 'red';
}


export default getColorCard;