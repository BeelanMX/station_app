import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import './styles.css';

class BigCard extends Component {
  render() {
    const {payload, label, iconName, iconSize, unit} = this.props

    return (
      <section className="Big_Card">
        <div className="Big_Card_icon">
          <Icon  iconName={iconName} size={iconSize}/>
        </div>
        <div className="Big_Card_label">
          <span className="payload">{payload}<span className="unit">{unit}</span></span>
          <span className="label">{label}</span>
        </div>
      </section>
    );
  }
}
BigCard.propTypes = {
  iconName: PropTypes.oneOf(['wind', 'humedity', 'rain', 'windspeed', 'temperature']),
  iconSize: PropTypes.oneOf(['xl', 'l', 'm', 's']),
  unit: PropTypes.String
}
BigCard.defaultProps = {
  iconSize: 'l',
  unit: ''
}

export default BigCard;
