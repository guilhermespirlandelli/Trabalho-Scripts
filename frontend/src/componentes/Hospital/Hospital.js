import React from "react"
import './Autores.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"


import { useEffect, useState } from 'react';

import TabelaHospital from "../Tabelas/TabelaHospital";

function Hospital() {
  const [hospital, setHospital] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    urlapi.get('hospital')
      .then(response => response.data)
      .then(response => setHospital(response))
  }, []
  )

  return (
    <>
      <div id="idAutores" className="autores">
        <div id="corpo_rel">
          <legend> Registros de Hospitais Cadastrados</legend>
          {/* <Link to="/hospital/0" value={'I'}>incluir Novo Hospital</Link> */}
          <div>

            <TabelaHospital
              items={hospital}
              chave={'/hospital/'}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Hospital;

