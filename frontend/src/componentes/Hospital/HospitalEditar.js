import React from "react"
import './AutoresEditar.css';
import urlapi from "../../services/api";

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function HospitalEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [autor, setAutor] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [nomeDiretor, setNomeDiretor] = useState('');
    const [funcionarios, setFuncionarios] = useState('');
    const [cidade, setCidade] = useState('');


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
        async function getHospital() {
            console.log(': ' + id + ' - ' + idBoolean)
            if (id == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/hospital/' + id);
                console.log(data)

                setCodigo(data[0].hos_codigo);

                setNome(data[0].hos_nome);
                setNomeDiretor(data[0].hos_nomediretor);
                setFuncionarios(data[0].hos_funcionarios);
                setCidade(data[0].hos_cidade);


                console.log(data[0].hos_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getHospital();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleHospital(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.hos_nomediretor);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Autor: ", id)
                if (id == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('hospital', data)
                    .then(response => alert('Sucesso'))
                } else {
                    console.log("Alteração de Registro! ", id)
                    await urlapi.put('/hospital/' + id, data);
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

                <form className="form--autor" onSubmit={handleHospital} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="hos_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome </label>
                            <input type="text" id="hos_nome" className="form-control"
                                name="hos_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Diretor </label>
                            <input type="text" className="form-control"
                                name="hos_nomediretor"
                                value={nomeDiretor}
                                onChange={e => setNomeDiretor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Funcionários </label>
                            <input type="text" className="form-control" name="hos_funcionarios"
                                id="hos_funcionarios"
                                value={funcionarios}
                                onChange={e => setFuncionarios(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cidade </label>
                            <input type="text" className="form-control" name="hos_cidade"
                                id="hos_cidade"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/hospital" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
