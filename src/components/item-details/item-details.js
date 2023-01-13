
import React, { useEffect, useState } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';


const Record = ({label, label_key, data}) => {
  return(
    <li className="list-group-item">
              <span className="term">{label}</span>
              <span>{data[label_key]}</span>
          
            </li>
            
  )
}


const ItemDetails = ({itemId, children, getImage}) => {
  const [state, SetState] = useState({data: []})
  const swapi = new SwapiService()
  const {id, name, eyeColor, birthYear, gender} = state.data;

     const itemImage = getImage({id})

  useEffect(() => {
    getImage()
 
  }, )

    return (
      <div className="person-details card">
        <img className="person-image" 
           src={itemImage}/>
          
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, (item) => {
                return React.cloneElement(
                  item,
                  {data: state.data}
                )
              })
            }
            
          </ul>
        </div>
      </div>
    )
} 

export  {ItemDetails, Record};