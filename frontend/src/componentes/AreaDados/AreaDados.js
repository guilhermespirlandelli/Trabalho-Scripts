import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Hospital from '../Hospital/Hospital';
import HospitalEditar from '../Hospital/HospitalEditar';
import Especialidade from '../Especialidade/Especialidade';
import EspecialidadeEditar from '../Especialidade/EspecialidadeEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/hospital" component={Hospital}></Route>
        <Route exact path="/hospital/:id" component={HospitalEditar}></Route>
        <Route exact path="/especialidade" component={Especialidade}></Route>
        <Route exact path="/especialidade/:id" component={EspecialidadeEditar}></Route>
{/*
        <Route exact path="/livrossss"          component={AutoresEditar}></Route>

        <Route exact path="/autores/consultar/:codigo" component={AutoresEditar}></Route>

*/}


      </Switch>

    </div>
  );
}

