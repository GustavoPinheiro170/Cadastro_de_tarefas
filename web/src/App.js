import React from 'react';
import {UserStorage} from './UserContext';
import {BrowserRouter, Route, Switch ,  Redirect} from 'react-router-dom';
import Header from './components/pages/Header/header';
import Formulario from './components/pages/Cadastro/formulario';
import Login from './components/pages/Login/login';
import Painel from './components/pages/Painel/painel';
import { isAuthenticated } from "./auth";
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
      )
    }
  />
);

function App(){

  return (
        <BrowserRouter>
           <UserStorage>
             <Header />            
              <Switch>
                <Route exact path="/" ><Login /></Route>        
                <Route path="/Cadastro" > <Formulario /></Route>        
                <Route path="/Login"  ><Login /> </Route>
                <PrivateRoute path="/Painel"  component={Painel} />
            </Switch>
            </UserStorage>
        </BrowserRouter>
 
    );
}
export default App;