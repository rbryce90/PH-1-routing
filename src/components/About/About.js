import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <h3><Link to="/about/faq">FAQ</Link></h3>
      <h3><Link to="/about/company">Company</Link></h3>
      {props.children}
    </div>
  )
}