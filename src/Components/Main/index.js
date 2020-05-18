import React, {Component, useState} from "react";
import {Container} from 'reactstrap';
import { cpfMask} from "../../Services/cpfMask";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { documentId: '' }
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {
        this.setState({cpf: cpfMask(e.target.value)})

    }

    render() {

        const [primeiroNome, setPrimeiroNome] = useState('');
        const [ultimoNome, setUltimoNome] = useState('');
        const [nascimento, setNascimento] = useState('');
        const [cpf, setCPF] = useState('');
        const [estadoCivil, setEstadoCivil] = useState('');
        const [genero, setGenero] = useState('');
        const [cor, setCor] = useState('');
        const [altura, setAltura] = useState('');
        const [tipoSanguineo, setTipoSanguineo] = useState('');
        const [massaMuscular, setMassaMuscular] = useState('');

    return (
        <main>
            <Container>
                <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01">Primeiro Nome</label>
                            <input type="text" className="form-control" id="validationTooltip01"
                                   placeholder="Digite seu nome" value={primeiroNome}
                                   onChange={e => setPrimeiroNome(e.target.value)} required/>
                            <div className="valid-tooltip">
                                Parece bom!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip02">Último Nome</label>
                            <input type="text" className="form-control" id="validationTooltip02"
                                   placeholder="Digite seu sobrenome"
                                   value={ultimoNome}
                                   onChange={e => setUltimoNome(e.target.value)} required/>
                            <div className="valid-tooltip">
                                Parece bom!
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2 mb-2">
                            <label htmlFor="validationTooltip05">Nascimento</label>
                            <input type="text" className="form-control" id="validationTooltip05"
                                   placeholder="00/00/0000" value={nascimento}
                                   onChange={e => setNascimento(e.target.value)} required/>
                            <div className="invalid-tooltip">
                                Forneça uma data válida.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationTooltip03">CPF</label>
                            <input maxLength='14' name='documentId' value={cpf}
                                   onChange={e => setCPF(e.target.value)}
                                   className="form-control" id="validationTooltip03" placeholder="000.000.000-00" required/>
                            <div className="invalid-tooltip">
                                Forneça um CPF válido.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationTooltip04">Estado Civil</label>
                            <select className="custom-select" id="validationTooltip04" value={estadoCivil}
                                    onChange={e => setEstadoCivil(e.target.value)}required>
                                <option selected disabled value="">Selecione aqui...</option>
                                <option value="1">Casado(a)</option>
                                <option value="2">Solteiro(a)</option>
                                <option value="3">Divorciado(a)</option>
                                <option value="3">Viuvo(a)</option>
                            </select>
                            <div className="invalid-tooltip">
                                Por favor, selecione um campo válido.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationTooltip04">Gênero</label>
                            <select className="custom-select" id="validationTooltip04" value={genero}
                                    onChange={e => setGenero(e.target.value)} required>
                                <option selected disabled value="">Selecione aqui...</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                                <option value="3">Prefiro não responder</option>
                                <option value="3">Outros</option>
                            </select>
                            <div className="invalid-tooltip">
                                Por favor, selecione um campo válido.
                            </div>
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="validationTooltip04">Cor</label>
                            <select className="custom-select" id="validationTooltip04" value={cor}
                                    onChange={e => setCor(e.target.value)} required>
                                <option selected disabled value="">Selecione aqui...</option>
                                <option value="1">Branca</option>
                                <option value="2">Preta</option>
                                <option value="3">Amarela</option>
                                <option value="3">Parda</option>
                                <option value="3">Indégena</option>
                            </select>
                        </div>
                        <div className="invalid-tooltip">
                            Por favor, selecione um campo válido.
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="validationTooltip03">Altura</label>
                            <input type="text" className="form-control" id="validationTooltip03" placeholder="0,00"
                                   value={altura}
                                   onChange={e => setAltura(e.target.value)} required/>
                            <div className="invalid-tooltip">
                                Forneça uma altura válida.
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2 mb-2">
                            <label htmlFor="validationTooltip04">Tipo Sanguíneo</label>
                            <select className="custom-select" id="validationTooltip04" value={tipoSanguineo}
                                    onChange={e => setTipoSanguineo(e.target.value)} required>
                                <option selected disabled value="">Selecione</option>
                                <option value="1">A+</option>
                                <option value="2">B+</option>
                                <option value="3">AB+</option>
                                <option value="4">AB-</option>
                                <option value="5">O+</option>
                                <option value="6">O-</option>
                            </select>
                        </div>
                        <div className="invalid-tooltip">
                            Por favor, selecione um campo válido.
                        </div>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="validationTooltip03">Massa muscular</label>
                            <input type="text" className="form-control" id="validationTooltip03" placeholder="0,00"
                                   value={massaMuscular}
                                   onChange={e => setMassaMuscular(e.target.value)} required/>
                            <div className="invalid-tooltip">
                                Forneça uma altura válida.
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit">Salvar</button>
                </form>
            </Container>
        </main>
    )};
}

export default Main;
