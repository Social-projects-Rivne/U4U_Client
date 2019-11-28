import React from 'react';
const commentContext = React.createContext( {
    comments:[],
    addComment:()=>{}
});

export default commentContext;
