import React from 'react';
import './GeneralRating.scss'
// import Rater from 'react-rater'
// import 'react-rater/lib/react-rater.css'

 export default class GeneralRating extends React.Component {
   render(){
    return  (
       <div className='Rating'>

         <fieldset className='Rating'>
           <input type='radio' className='Star Star-5' id='Star-5' name='Star' />
           <label for='Star-5' className='Star Star-5' title='Awesome - 5 stars'></label>

           <input type='radio' className='Star Star-4' id='Star-4' name='Star' />
           <label for='Star-4' className='Star Star-4' title='Pretty good - 4 stars'></label>

           <input type='radio' className='Star Star-3' id='Star-3' name='Star' />
           <label for='Star-3' className='Star Star-3' title='So-so- 3 stars'></label>

           <input type='radio' className='Star Star-2' id='Star-2' name='Star' />
           <label for='Star-2' className='Star Star-2' title='Bad - 2 stars'></label>

           <input type='radio' className='Star Star-1' id='Star-1' name='Star' />
           <label for='Star-1' className='Star Star-1' title='Very bad - 1 star'></label>
        </fieldset>              
      </div >
           

              
          // <Rater total={5} rating={4}/>
     )
    }
    }

