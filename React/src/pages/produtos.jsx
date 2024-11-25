import { useState, useEffect } from 'react';

const Produtos = () => {
  const [filtros, setFiltros] = useState({ preço: [], cor: [], tamanho: [], categoria: [] });
  const [opcaoOrdenacao, setOpcaoOrdenacao] = useState('preço');
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [marcadores, setMarcadores] = useState({ Camisas: false, Moleton: false });

  useEffect(() => {
    setProdutos([
      { id: 1, nome: 'Produto 1', preço: 25, cor: 'Azul', tamanho: 'M', categoria: 'Camisas', imagem: 'https://via.placeholder.com/300x300?text=Produto+1' },
      { id: 2, nome: 'Produto 2', preço: 50, cor: 'Vermelho', tamanho: 'G', categoria: 'Moleton', imagem: 'https://via.placeholder.com/300x300?text=Produto+2' },
    ]);
  }, []);

  useEffect(() => {
    let produtosFiltradosTemp = produtos;

    if (filtros.categoria.length > 0) {
      produtosFiltradosTemp = produtosFiltradosTemp.filter(produto =>
        filtros.categoria.includes(produto.categoria)
      );
    }

    setProdutosFiltrados(produtosFiltradosTemp);
  }, [filtros, produtos]);

  const handleFiltrarCategoria = (categoria) => {
    const isMarcado = marcadores[categoria];
    setMarcadores({ ...marcadores, [categoria]: !isMarcado });

    if (isMarcado) {
      setFiltros({ ...filtros, categoria: [] });
    } else {
      setFiltros({ ...filtros, categoria: [categoria] });
    }
  };

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    return opcaoOrdenacao === 'preço' ? a.preço - b.preço : a.nome.localeCompare(b.nome);
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-center space-x-4 my-4 relative">
        <div className="relative">
          <button
            onClick={() => handleFiltrarCategoria('Camisas')}
            className="px-0.1 py-0.1 bg-transparent text-white rounded"
          >
            <svg class="flex-none w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
          </button>
          {marcadores.Camisas && (
            <svg class="flex-none w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => handleFiltrarCategoria('Moleton')}
            className="px-0.1 py-0.1 bg-transparent text-white rounded"
          >
          <svg class="flex-none w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
          </svg>
          </button>
          {marcadores.Moleton && (
            <svg class="flex-none w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* PRODUTOS */}
      <div className="flex-1 p-6">
        <section className="pt-6">
          <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4">
            {produtosOrdenados.length > 0 ? (
              produtosOrdenados.map(produto => (
                <div key={produto.id} className="relative flex flex-col items-center bg-white p-4 border rounded-lg shadow-md">
                  <img src={produto.imagem} alt={produto.nome} className="w-full h-auto mb-4" />
                  <h3 className="text-lg font-semibold">{produto.nome}</h3>
                  <p className="text-gray-600">{produto.cor} - {produto.tamanho}</p>
                  <p className="text-gray-900 font-bold">R${produto.preço}</p>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center text-gray-500">Nenhum produto encontrado.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Produtos;
