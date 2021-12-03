import React from "react"
import './AutoresEditar.css';
import urlapi from "../../services/api";

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function EspecialidadeEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [descricao, setDescricao] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [vagas, setVagas] = useState('');
    


    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { id } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id : ' + id + ' - ' + idBoolean)
        if (id == 0) {
            //            nomeCampo = 'Inclusão de Autor';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getEspecialidade() {
            console.log(': ' + id + ' - ' + idBoolean)
            if (id == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/especialidade/' + id);
                console.log(data)

                setCodigo(data[0].esp_codigo);

                setDescricao(data[0].esp_descricao);
                setResponsavel(data[0].responsavel);
                setVagas(data[0].esp_vagas);
                


                console.log(data[0].hos_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getEspecialidade();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleEspecialidade(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.esp_codigo);

        try {
            if (codigo.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Autor: ", id)
                if (id == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('especialidade', data)
                    .then(response => alert('Sucesso'))
                } else {
                    console.log("Alteração de Registro! ", id)
                    await urlapi.put('/especialidade/' + id, data);
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleEspecialidade} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="esp_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Descrição </label>
                            <input type="text" id="esp_descricao" className="form-control"
                                name="esp_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Responsável </label>
                            <input type="text" className="form-control"
                                name="esp_responsavel"
                                value={responsavel}
                                onChange={e => setResponsavel(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Vagas </label>
                            <input type="text" className="form-control" name="esp_vagas"
                                id="esp_vagas"
                                value={vagas}
                                onChange={e => setVagas(e.target.value)}
                            />
                        </div>
                    </div>

                 


                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/especialidade" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
