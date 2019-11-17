import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tab.scss';

export default class Tab extends Component {
    constructor (props) {
        super (props);

        if (typeof props.id               ===   "undefined"
            || typeof props.title         ===   "undefined"
            || typeof props.url           ===   "undefined"
            || typeof props.isActive      ===   "undefined"
            || typeof props.setTabElement ===   "undefined"
            || typeof props.onActive      ===   "undefined") {
            throw Error("This component cant exist without next props:\n id,\n title,\n url,\n isActive,\n setTabElement(),\n onActive()\n");
        }
  
        this.state = {
          isActive: this.props.isActive,
          id: this.props.id,
          title: this.props.title,
          url: this.props.url
        };
    }

    setActive = () => {
        this.setState({isActive: true});
        this.props.onActive(this.state.id);
    }
    
    render () {
        return(
            <Link 
                to={this.state.url}
                className={`Tab ${this.state.isActive ? "active" : ""}`}
                onClick={() => { this.setActive() }}
                ref={tab => {this.props.setTabElement(tab, this.state.id, this.state.isActive)}}>
                {this.state.title}
            </Link>
        );
    }
}