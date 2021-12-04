import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function TabelaEspecialidade(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.esp_codigo}>
          <td> {item.esp_codigo} </td>
          <td> {item.esp_descricao} </td>
          <td> {item.esp_responsavel} </td>
          <td> {item.esp_vagas} </td>
          <td> {item.hos_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.esp_codigo} > Editar </a></td>
          {/* <td id="ativar"> <a className="btn btn-danger btn-block" href={props.chave + item.aut_codigo} > Inativar </a></td> */}
          {/* <td> <Link to={props.chave + item.aut_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td> */}

          {/* <td> <i className="bi bi-trash"></i> </td> */}
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Responsável </th>
            <th scope="col"> Vagas </th>
            <th scope="col"> Código do Hospital </th>

            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Especialidade</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}