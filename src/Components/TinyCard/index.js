import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { ICONS_NAMES } from '../../consts/icons';
import './styles.css';

class TinyCard extends Component {
  render() {
    const {payload, label, unit, iconName} = this.props

    return (
      <section className="Tiny_Card">
        <div className="Tiny_Card_icon">
          <Icon  iconName={iconName} size="m"/>
        </div>
        <div className="Tiny_Card_label">
          <span className="payload">{payload}<span className="unit">{unit}</span> </span>
          <span className="label">{label}</span>
        </div>
      </section>
    );
  }
}
TinyCard.propTypes = {
  iconName: PropTypes.oneOf(ICONS_NAMES),
}
TinyCard.defaultProps = {
}

export default TinyCard;
