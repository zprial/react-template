import * as React from 'react';
import { Link } from 'react-router-dom';

const Logo = require('../../static/Avater2.jpg');

export default class extends React.Component {
  render() {
    return (<Link to="/other">
      <img src={Logo} alt="哆啦Ａ梦"　width="430" />
      <h1>Hello You!</h1>
    </Link>);
  }
}
