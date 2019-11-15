import React from 'react';
import '../styles/App.css';
import styled from 'styled-components'

import { Route, Switch } from "react-router-dom";
import Header from './components/layout/Header'

import UsersContainer from './containers/usersContainer'


function App() {
  return (
    <div className="App">
      <Header/>
      <AppContainer >
        <Switch>
          <Route exact path="/" component={() => <div>hello world</div>} />
          <Route exact path="/users" component={UsersContainer}/>
        </Switch>
      </AppContainer>
    </div>
  );
}

export default App;


const AppContainer = styled.div `
    padding: 20px 30px;
    display: flex;
    justify-content: center;
`;
