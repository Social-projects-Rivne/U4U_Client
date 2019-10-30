import React from 'react';

const Suggestions = (props) =>{
    const options = props.query.map(place => (
     <li key={place._id}>
               {place.name}
     </li>
   ))
   return <ul>{options}</ul>
   }

export default  Suggestions;