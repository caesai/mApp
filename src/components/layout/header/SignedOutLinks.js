import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

class SignedOutLinks extends Component {
  // Render
  render() {
    let headerClasses = ['header'];
    headerClasses.push('mainPageHeader-top');
    headerClasses = classNames(headerClasses);  

    return <></>
  }
}

export default SignedOutLinks