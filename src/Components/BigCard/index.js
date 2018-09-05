import React, { Component } from 'react';

import Icon from '../Icon';
import './styles.css';

class BigCard extends Component {
  render() {
    const {payload} = this.props
    const {label} = this.props
    return (
      <section className="Big_Card">
        <div className="Big_Card_icon">
          <Icon  iconName="rain" size="l"/>
        </div>
        <div className="Big_Card_label">
          <span className="payload">{payload}</span>
          <span className="label">{label}</span>
        </div>
      </section>
    );
  }
}

export default BigCard;
