import React from 'react';
import Service from '../../../../services/tourist-service';
import './AsideHeading.scss';

export default class AsideHeading extends React.Component {
    service = new Service();

       render(){
           this.service.getResource()
           .then((res) =>{
               console.log(res);
           })
        return  (
            <h4 className ='AsideHeading'>Places nearby</h4>
                 
        )
       }
    }
