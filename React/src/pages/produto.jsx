import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Header from './header';
import Footer from './footer';

import { Produtos } from '../data';

import "../css/produto.css";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/*página principal*/}
//         <Route path="/" element={<Home />} />
//         {/*página do produto*/}
//         <Route path="/produto/:productId" element={<ProductPage />} />
//       </Routes>
//     </Router>
//   );
// };

// const Home = () => {
//   const products = [
//     { id: 1, name: "Quadro BMO", image: "img/download.png", price: "R$ 29,90" },
//     {
//       id: 2,
//       name: "Produto X",
//       image: "img/download (1).png",
//       price: "R$ 19,90",
//     },
//     {
//       id: 3,
//       name: "Produto Y",
//       image: "img/download (2).png",
//       price: "R$ 39,90",
//     },
//   ];

//   return (
//     <div>
//       <h1>Produtos</h1>
//       <div className="product-list">
//         {products.map((prod) => (
//           <div key={prod.id} className="product-item">
//             <Link to={`/produto/${prod.id}`}>
//               <img src={prod.image} alt={prod.name} />
//               <h3>{prod.name}</h3>
//               <p>{prod.price}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const ProductPage = () => {
  // const [product, setProduct] = useState(null);
  // const { productId } = useParams();
  const { id } = useParams();
  const product = Produtos.find((p) => p.id === Number(id));

  // const products = [
  //   {
  //     id: 1,
  //     name: "Quadro BMO",
  //     image: "img/download.png",
  //     price: "R$ 29,90",
  //     description: "Descrição do Quadro BMO.",
  //   },
  //   {
  //     id: 2,
  //     name: "Produto X",
  //     image: "img/download (1).png",
  //     price: "R$ 19,90",
  //     description: "Descrição da Caneca X.",
  //   },
  //   {
  //     id: 3,
  //     name: "Produto Y",
  //     image: "img/download (2).png",
  //     price: "R$ 39,90",
  //     description: "Descrição do Produto Y.",
  //   },
  // ];

  // useEffect(() => {
  //   const selectedProduct = products.find(
  //     (prod) => prod.id === parseInt(productId)
  //   );
  //   setProduct(selectedProduct);
  // }, [productId]);

  // if (!product) {
  //   return <div>Produto não encontrado.</div>;
  // }

  return (
    <div className="mt-24">
      <header>
        <h1>{product.name}</h1>
      </header>

      <div className="product-container">
        <div className="image-slider">
          <img id="product-image" src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <div className="button-container">
            <button className="comprar">Comprar</button>
            <button className="adicionar-carrinho">
              Adicionar ao Carrinho
            </button>
          </div>
          <div className="trustmessage">
            <p>
              <i className="bx bxs-truck"></i> ENVIO PARA TODO BRASIL
            </p>
            <p>
              <i className="bx bxs-lock"></i> SITE 100% SEGURO
            </p>
            <p>
              <i className="bx bxs-certification"></i> SATISFAÇÃO GARANTIDA
            </p>
          </div>
        </div>
      </div>

      <div className="descricao">
        <h2>DESCRIÇÃO</h2>
        <p>{product.description}</p>
      </div>

      <SimuladorFrete />

      <div className="related-products">
        <h2>PRODUTOS RELACIONADOS</h2>
        <div className="related-product-list">
          {Produtos.map((prod) => (
            <div className="related-product-item" key={prod.id}>
              <Link to={`/produto/${prod.id}`}>
                <img
                  src={prod.image}
                  alt={`Produto Relacionado ${prod.name}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='fixed left-0'><Header /></div>
        <div className='mt-60'>
          <Footer />
        </div>
    </div>
  );
};

//componente pra simular o frete
const SimuladorFrete = () => {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  const buscarFrete = async () => {
    const cepLimpo = cep.replace(/\D/g, ""); //remove caracter não numérico

    if (cepLimpo.length !== 8) {
      setResultado("Por favor, insira um CEP válido.");
      return;
    }

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );
      const data = await response.json();

      if (data.erro) {
        setResultado("CEP não encontrado.");
      } else {
        setResultado(
          `
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Endereço:</th>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.logradouro}, ${data.bairro} - ${data.localidade}, ${data.uf}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Forma de Envio:</th>
              <td style="padding: 8px; border: 1px solid #ddd;">Correios Entrega Normal</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Valor:</th>
              <td style="padding: 8px; border: 1px solid #ddd;">Frete Grátis</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Prazo:</th>
              <td style="padding: 8px; border: 1px solid #ddd;">Até 7 dia(s) úteis</td>
            </tr>
          </table>
          `
        );
      }
    } catch (error) {
      setResultado("Erro ao buscar o CEP. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="frete-container">
      <h2>Simule o Frete</h2>
      <input
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={buscarFrete}>Buscar</button>
      <div
        id="resultado-frete"
        dangerouslySetInnerHTML={{ __html: resultado }}
      ></div>
    </div>
  );
};

export default ProductPage;
// export default App;
