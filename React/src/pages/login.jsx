import React from 'react';
import { Link } from "react-router-dom";

import "../css/login.css";

const Login = () => {
    return (
<div>
        <div class="caixa">
        <h1>Escolha uma forma de entrar.</h1>
        <Link to="/entar">
            <button class="button">Entrar</button>
        </Link>
        <Link to="/cadastrar">
            <button class="button">Cadastrar</button>
        </Link>
        </div>
    </div>
    )
};

export default Login;
