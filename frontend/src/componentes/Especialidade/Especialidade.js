import React from "react"
import './Autores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"


import { useEffect, useState } from 'react';

import TabelaEspecialidade from "../Tabelas/TabelaEspecialidade";

function Especialidade() {
  const [especialidade, setEspecialidade] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    urlapi.get('especialidade')
      .then(response => response.data)
      .then(response => setEspecialidade(response))
      
  }, []
  )

  return (
    <>
      <div id="idAutores" className="autores">
        <div id="corpo_rel">
          <legend> Registros de Especialidades Cadastradas</legend>
          {/* <Link to="/hospital/0" value={'I'}>incluir Novo Hospital</Link> */}
          <div>

            <TabelaEspecialidade
              items={especialidade}
              chave={'/especialidade/'}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Especialidade;

