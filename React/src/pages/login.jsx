import React from 'react';
import { Link } from "react-router-dom";
// import "../css/login.css";

const Login = () => {
    return (

<div className="flex items-center justify-center h-screen bg-gray-50">
  <div className="w-96 bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 className="text-xl font-semibold mb-4">Escolha uma forma de login.</h1>
    <Link to={"/entrar"}>
      <button className="block w-3/4 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
        Entrar
      </button>
    </Link>
    <Link to={"/cadastrar"}>
      <button className="block w-3/4 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
        Cadastrar
      </button>
    </Link>
  </div>
</div>

    )
};

export default Login;
