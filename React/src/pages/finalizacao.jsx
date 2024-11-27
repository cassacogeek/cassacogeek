import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Finalizacao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    telefone: '',
    cartao: '',
    validade: '',
    cvv: '',
  });

  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validarFormulario = (event) => {
    const { nome, endereco, cidade, cep, telefone, cartao, validade, cvv } = formData;

    if (!nome || !endereco || !cidade || !cep || !telefone || !cartao || !validade || !cvv) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      event.preventDefault();
      return false;
    }

    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cep.match(cepRegex)) {
      alert('O formato do CEP é inválido.');
      event.preventDefault();
      return false;
    }

    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!telefone.match(telefoneRegex)) {
      alert('O formato do telefone é inválido. Exemplo: (11) 98765-4321');
      event.preventDefault();
      return false;
    }

    const cartaoRegex = /^\d{16}$/;
    if (!cartao.match(cartaoRegex)) {
      alert('O número do cartão de crédito é inválido.');
      event.preventDefault();
      return false;
    }

    calcularTotal();
    alert('Compra finalizada com sucesso!');
    return true;
  };

  const calcularTotal = () => {
    const produtos = [
      { nome: 'Produto 1', preco: 100.00 },
      { nome: 'Produto 2', preco: 50.00 },
      { nome: 'Produto 3', preco: 200.00 }
    ];

    let total = 0;
    produtos.forEach((produto) => {
      total += produto.preco;
    });

    setTotal(total);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-3xl">
      <h1 className="text-center text-2xl mb-6">Finalização da Compra</h1>

      <div className="Dados mb-10">
        <h2 className="text-xl mb-3">Informações de Envio</h2>
        <form onSubmit={validarFormulario}>
          <label htmlFor="nome" className="block mb-2 font-bold">Nome Completo:</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <label htmlFor="endereco" className="block mb-2 font-bold">Endereço:</label>
          <input 
            type="text" 
            id="endereco" 
            name="endereco" 
            value={formData.endereco} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <label htmlFor="cidade" className="block mb-2 font-bold">Cidade:</label>
          <input 
            type="text" 
            id="cidade" 
            name="cidade" 
            value={formData.cidade} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <label htmlFor="cep" className="block mb-2 font-bold">CEP:</label>
          <input 
            type="text" 
            id="cep" 
            name="cep" 
            value={formData.cep} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <label htmlFor="telefone" className="block mb-2 font-bold">Telefone:</label>
          <input 
            type="text" 
            id="telefone" 
            name="telefone" 
            value={formData.telefone} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <h2 className="text-xl mt-6 mb-3">Método de Pagamento</h2>
          <label htmlFor="cartao" className="block mb-2 font-bold">Número do Cartão:</label>
          <input 
            type="text" 
            id="cartao" 
            name="cartao" 
            value={formData.cartao} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <label htmlFor="validade" className="block mb-2 font-bold">Validade:</label>
          <input 
            type="text" 
            id="validade" 
            name="validade" 
            value={formData.validade} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <label htmlFor="cvv" className="block mb-2 font-bold">CVV:</label>
          <input 
            type="text" 
            id="cvv" 
            name="cvv" 
            value={formData.cvv} 
            onChange={handleChange} 
            required 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />

          <button type="submit" className="w-full p-4 bg-brown-600 text-white rounded-lg hover:bg-brown-700">Finalizar Compra</button>
        </form>
      </div>

      <div className="ResumoDoPedido p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Resumo do Pedido</h2>
        <ul className="list-none pl-0">
          <li className="mb-3">Produto 1 - R$100,00</li>
          <li className="mb-3">Produto 2 - R$50,00</li>
          <li className="mb-3">Produto 3 - R$200,00</li>
        </ul>
        <p className="text-lg font-bold text-right">Total: R$ {total.toFixed(2)}</p>
      </div>

      <Header />
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
};

export default Finalizacao;
