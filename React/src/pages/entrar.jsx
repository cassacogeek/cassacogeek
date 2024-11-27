import React from "react";
import { Link } from "react-router-dom";

const Entrar = () => {
    return (

        <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="w-[800px] bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 className="text-xl font-semibold mb-6">Entrar</h1>

  <form>

    <div className="form-group mb-4">
      <label for="Email" class="block mb-2 font-bold">Email</label>
      <input 
        id="EntEmail" 
        type="email" 
        placeholder="Digite seu email."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="form-group mb-4">
      <label for="Senha" class="block mb-2 font-bold">Senha</label>
      <input 
        id="EntSenha" 
        type="password"
        placeholder="Digite sua senha."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

  </form>

  <Link to={"/home"}>
    <button className="block w-1/2 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
      Entrar
    </button>
  </Link>

  <p>
    Não tem uma conta?
    <Link to={"/Cadastrar"} className="text-blue-500">
      Cadastre-se.
    </Link>
  </p>

  <p>
    Esqueceu a senha? 
    <Link to={"/Recuperar"} className="text-blue-500">
      Recuperar.
    </Link>
  </p>
  </div>
</div>

    )

}

export default Entrar;
