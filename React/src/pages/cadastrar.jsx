import React from "react";
import { Link } from "react-router-dom";

const Cadastrar = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="w-[800px] bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 className="text-xl font-bold mb-6">Cadastrar</h1>

  <form>

    <div class="form-group mb-4">
      <label for="CadastrarNome" className="block mb-2 font-semibold">Nome</label>
      <input 
        id="CadasNome" 
        type="text" 
        placeholder="Digite seu nome."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="form-group mb-4">
      <label for="Email" className="block mb-2 font-semibold">Email</label>
      <input 
        id="CadasEmail" 
        type="email" 
        placeholder="Digite seu email."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="form-group mb-4">
      <label for="Email" className="block mb-2 font-semibold">Criar senha</label>
      <input 
        id="CadasSenha" 
        type="password" 
        placeholder="Digite seu email."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

  </form>

  <Link to={"/home"}>
    <button className="block w-1/2 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
      Cadastrar
    </button>
  </Link>

  <p>
    Já tem uma conta?
    <Link to={"/entrar"} className="text-blue-500 hover" >
      Entrar.
    </Link>
  </p>

  </div>
</div>

    )
}
export default Cadastrar;
