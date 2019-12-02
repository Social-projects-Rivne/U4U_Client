import React, { Component } from "react";
import MapContainer from "../mapContainer";
import { Redirect } from 'react-router-dom'


export default class MapSvg extends Component {
  constructor (props) {
    super (props);

    this.state = {
      hover: null,
      toPlacesList: false,
      regionId: null,
  
      count: 0,
      svg: null,
      loaded: false,
    }
  }

  componentDidUpdate() {
    if (this.state.count === 59 && !this.state.loaded) {
      this.setState({loaded: true});
      this.props.onImagesLoaded(true);
    }
  }

  componentDidMount() {
    if (!this.state.svg) this.loadSvg();
  }

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  loadSvg = () => {
    setTimeout(() => {
      this.setState({svg: 
        <MapContainer 
          setCount={this.setCount} 
          mouseMove={this.props.mouseMove}
          mouseOut={this.props.mouseOut}
          handleOnClick={this.handleOnClick} />
      });
    }, 400)
  };

  handleOnClick = id => {
    this.setState({
      toPlacesList: true,
      regionId: id
    });
  };

  render() {
    const { toPlacesList, regionId } = this.state;
    if (toPlacesList) {
      return <Redirect to={`/places-list/filter/region=${regionId}`} />;
    }

    return (
     this.state.svg ? this.state.svg : null
    );
  }
}
