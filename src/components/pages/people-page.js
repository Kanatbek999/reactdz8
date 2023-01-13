

import React, { useState } from 'react'
import ItemList from '../item-list';
import {ItemDetails, Record} from '../item-details';
import Row from '../row';
import withSwapi from '../hoc';



const leftElementMethods = (swapi) => ({getData: swapi.getAllPlanets})
const NewItemList = withSwapi(ItemList, leftElementMethods)

const rightElementMethods = (swapi) => ({
  getData: swapi.getPlanet, 
  getImage: swapi.getPlanetImage
})
const NewItemDetails = withSwapi(ItemDetails, rightElementMethods)
    
const PeoplePage = () => {
    const [state, setState] = useState({itemId: 1})



    const leftElement = ( 
    <NewItemList setItemId={(id) => setState({itemId: id})}>
      {(item) => `${item.name} - ${item.eyeColor}`}

      </NewItemList>
      )
      
    const rightElement = (
      <NewItemDetails itemId={state.itemId}>
          <Record label='Gender' label_key='gender'/>
          <Record label='Eye bcolor' label_key='eyeColor'/>
          <Record label='birth year' label_key='birthYear'/>
       
          
          
     </NewItemDetails>
    ) 
    
  return (
        <Row left={leftElement} right={rightElement}/>
  )
  
} 

export default PeoplePage