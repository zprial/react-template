import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Avater from '../../static/Avater.jpg';

export default class extends Component {
  render() {
    return (<Link to="/other">
      <img src={Avater} alt="哆啦Ａ梦"　width="430" />
      <h1>Hello World!</h1>
    </Link>);
  }
}
