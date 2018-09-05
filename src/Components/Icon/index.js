import React from 'react';
import PropTypes from 'prop-types';

import wind from './wind.svg';
import humedity from './humedity.svg';
import rain from './rain.svg';
import windspeed from './windspeed.svg';
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
    default:
      icon = wind;
  }

  return (
      <img  className={props.size} src={icon} alt={props.iconName}/>
  )
};

Icon.propTypes = {
  iconName: PropTypes.oneOf(['wind', 'humedity', 'rain', 'windspeed']),
  size: PropTypes.oneOf(['xl', 'l', 'm', 's']),
}
Icon.defaultProps = {
  size: 'l'
}

export default Icon;