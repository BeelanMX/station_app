import React from 'react';
import PropTypes from 'prop-types';

import wind from './wind.svg';
import humedity from './humedity.svg';
import rain from './rain.svg';
import windspeed from './windspeed.svg';
import temperature from './temperature.svg';
import ilumination from './ilumination.svg';
import { ICONS_NAMES } from '../../consts/icons'

import './styles.css';

const Icon = (props) => {
  let icon;
  switch (props.iconName) {
    case 'wind':
      icon = wind;
      break;
    case 'humedity':
      icon = humedity;
      break;
    case 'rain':
      icon = rain;
      break;
    case 'windspeed':
      icon = windspeed;
      break;
    case 'temperature':
      icon = temperature;
      break;
    case 'ilumination':
      icon = ilumination;
      break;
    default:
      icon = wind;
  }

  return (
      <img  className={props.size} src={icon} alt={props.iconName}/>
  )
};

Icon.propTypes = {
  iconName: PropTypes.oneOf(ICONS_NAMES),
  size: PropTypes.oneOf(['xl', 'l', 'm', 's']),
}
Icon.defaultProps = {
  size: 'm'
}

export default Icon;
