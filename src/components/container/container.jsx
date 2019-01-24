import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import classNames from 'classnames'

class footer extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			scrollTop: 0
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);

		this.handleScroll();
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		let pageYOffset = window.pageYOffset;

		if (typeof(pageYOffset) != 'undefined')
			this.setState({scrollTop: pageYOffset});
	}
	
	render() {		
        let containerClass = ['container'];

        if (this.state.scrollTop)
        {
            containerClass.push('_headerFixed');
		}

        if (this.props.classes && Array.isArray(this.props.classes))
        this.props.classes.forEach(function(element){
            containerClass.push(element);
        });

        containerClass = classNames(containerClass);

	    return <div className={containerClass}>
            {this.props.children}
		</div>;
	}
}

export default footer;