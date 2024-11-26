import React from 'react';
import { Link } from "react-router-dom";

import "../css/login.css";

const Login = () => {
    return (
<div>
        <div class="caixa">
        <h1>Escolha uma forma de entrar.</h1>
        <link to="/entar">
            <button class="button">Entrar</button>
        </link>
        <link to="/cadastrar">
            <button class="button">Cadastrar</button>
        </link>
        </div>
    </div>
    )
};

export default Login;
