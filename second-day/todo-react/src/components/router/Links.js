import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Links extends Component {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  handleClick = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line
    //history.pushState(null, '', this.props.to)
    this.context.linkHandler(this.props.to)
  }
  render(){
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return <a href="#" className={activeClass}
    onClick={this.handleClick}>{this.props.children}</a>
  }
}