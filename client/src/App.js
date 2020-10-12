import React from 'react';
import { ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import logo from './spacex.webp';
import './App.css';
import Launches from './components/Launches.js'
import Launch from './components/Launch.js'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})


function App() {
  return (
    <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>

      <div className="App">
        <h1>SpaceX</h1>
        <img
        alt="logo-spaceX"
          src={logo}
        />
        <Route exact path="/" component={Launches}/>
        <Route exact path="/launch/:flight_number" component={Launch}/>
      </div>
      </Router>
    </ApolloProvider>
    </React.StrictMode>

  );
}

export default App;
