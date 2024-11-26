import React from "react";
import { Link } from "react-router-dom";

const Aviso = () => {
    return (

      <div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="w-[800px] bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 class="text-xl font-bold mb-6">Aviso de recuperação de email</h1>

  <p>
    Um código de seis dígitos foi enviado para o seu e-mail para confirmar que é você acessando a conta.
  </p>

<form>
  <div class="form-group mb-4">
      <label for="Senha" class="block mb-2 font-bold">Codigo de recuperação</label>
      <input 
        id="codigo" 
        type="number"
        placeholder="Digite o código."
        class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
  </div>
</form>

  <a href="/home">
    <button class="block w-1/2 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
      Enviar codigo
    </button>
  </a>

  </div>
</div>

    )

}

export default Aviso;