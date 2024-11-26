import React from "react";
import { Link } from "react-router-dom";

const [user, setUser] = React.useState(null); {

return <div>{user ? user.name : "Usuário não encontrado"}</div>; 
  (

<div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="w-[800px] bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 className="text-xl font-semibold mb-6">Cadastrar</h1>

  <form>

    <div className="form-group mb-4">
      <label for="Nome" className="block mb-2 font-bold">Nome de Usuario</label>
      <input 
        id="Nome" 
        type="text"
        placeholder="Digite seu nome." 
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="form-group mb-4">
      <label for="Email" className="block mb-2 font-bold">Email</label>
      <input 
        id="Email" 
        type="email" 
        placeholder="Digite seu email."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="form-group mb-4">
      <label for="Senha" className="block mb-2 font-bold">Criar Senha</label>
      <input 
        id="Senha" 
        type="password"
        placeholder="Digite sua senha."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

  </form>

  <Link href="/home">
    <button className="block w-1/2 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
      Cadastrar
    </button>
  </Link>
  
  <p>
      Já tem uma conta?
    <Link href="/entrar" className="text-blue-500">
      Entrar.
    </Link>
  </p>
  </div>
</div>

    )
};

export default Cadastrar;
