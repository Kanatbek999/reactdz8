
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../pages'
import './app.css';
import SwapiService from '../../services/swapi-service';
import { Provider } from "../swapi-context";

const swapi = new SwapiService()

const App = () => {
  return (
    <div>
      <Provider value={swapi}>
        <Header />
        <RandomPlanet />
        <PeoplePage/>
      </Provider>
    </div>
  );
};

export default App;