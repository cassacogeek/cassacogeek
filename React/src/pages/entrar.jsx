import React from "react";
import { Link } from "react-router-dom";

const Entrar = () => {
    return (

        <div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="w-[800px] bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 class="text-xl font-semibold mb-6">Entrar</h1>

  <form>

    <div class="form-group mb-4">
      <label for="Email" class="block mb-2 font-bold">Email</label>
      <input 
        id="EntEmail" 
        type="email" 
        placeholder="Digite seu email."
        class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div class="form-group mb-4">
      <label for="Senha" class="block mb-2 font-bold">Senha</label>
      <input 
        id="EntSenha" 
        type="password"
        placeholder="Digite sua senha."
        class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

  </form>

  <a href="/home">
    <button class="block w-1/2 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
      Entrar
    </button>
  </a>

  <p>
    Não tem uma conta?
    <a href="/Cadastrar" class="text-blue-500">
      Cadastre-se.
    </a>
  </p>

  <p>
    Esqueceu a senha? 
    <a href="/Recuperar" class="text-blue-500">
      Recuperar.
    </a>
  </p>
  </div>
</div>

    )

}
