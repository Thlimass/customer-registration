import React, { Component } from "react";

const TableHead = () => {
    return (
        <thead>
        <tr>
            <th>Clientes</th>
            <th>Nascimento</th>
            <th>CPF</th>
            <th>Estado Civil</th>
            <th>Gênero</th>
            <th>Cor</th>
            <th>Altura</th>
            <th>Tipo Sanguineo</th>
            <th>Massa Muscular</th>
        </tr>
        </thead>

    )
}

const TableBody = props => {
    const linhas = props.customer.map((linha, index) => {
        return (
            <tr key={{index}}>
                <td>{linha.primeiroNome}</td>
                <td>{linha.ultimoNome}</td>
                <td>{linha.nascimento}</td>
                <td>{linha.cpf}</td>
                <td>{linha.estadoCivil}</td>
                <td>{linha.genero}</td>
                <td>{linha.cor}</td>
                <td>{linha.altura}</td>
                <td>{linha.tipoSanguineo}</td>
                <td>{linha.massaMuscular}</td>
                    <button on onClick={() => {
                        props.removerCliente(index)
                    }}
                            className="btn btn-primary"
            </tr>
        )
    });
    return(
        <tbody>
        {linhas}
        </tbody>
    );
}

class CustomerTable extends Component {
        render() {
            const { clientes, removeCustomer } = this.props;

            return (
                <table className=" centered highlight">
                    <TableHead/>
                    <TableBody clientes = {clientes} removeCustomer = {removeCustomer} />
                </table>
            );
        }
}

export default CustomerTable;
