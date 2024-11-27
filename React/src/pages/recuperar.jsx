import React from "react";
import { Link } from "react-router-dom";

const Recuperar = () => {
    return (

      <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="w-[800px] bg-gray-50 text-black border border-gray-500 rounded-lg p-5 shadow-lg text-center">
    <h1 className="text-xl font-bold mb-6">Recuperar senha</h1>

  <form>

    <div className="form-group mb-4">
      <label for="Email" className="block mb-2 font-semibold">Email</label>
      <input 
        id="EntEmail" 
        type="email" 
        placeholder="Digite seu email."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

  </form>

  <Link to={"/aviso"}>
    <button className="block w-1/2 mx-auto bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-gray-300 hover:text-gray-500 border transition-colors">
      Enviar codigo
    </button>
  </Link>

  </div>
</div>

    )

}

export default Recuperar;
