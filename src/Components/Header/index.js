import React from "react";
import { MDBIcon } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {

        return(
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <MDBIcon far icon="user-circle" size="lg" className="mr-3" />
                    Cadastro de Cliente
                </a>
            </nav>
        );

}

export default Header;