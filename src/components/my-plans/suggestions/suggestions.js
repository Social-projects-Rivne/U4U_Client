import React,{Component} from 'react';
import './suggestions.scss';


export default class  Suggestions extends Component {

  render(){
    let foo;
    const {query, onSuggestItemClick,comment} = this.props;
    // const{inputValue} = this.state;
    const options = query.map(place => (
      <li key={place._id}
      onClick = {()=> { this.setState({
        inputValue:place.name
      })
        
        
        debugger
        }}>
                {place.name}
      </li>
    ))
    return(
          <ul>{options}</ul>
    )
  }
}

 