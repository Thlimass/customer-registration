import React from "react";
import { MDBIcon } from "mdbreact";

const Header = () => {

        return(
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="_blank">
                    <MDBIcon far icon="user-circle" size="lg" className="mr-3" />
                    Cadastro de Cliente
                </a>
            </nav>
        );

}

export default Header;