import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //captura o id da url
import "./styles.css";

const App = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); //pega o id da url
  const [currentImage, setCurrentImage] = useState(0); //controlar imagens do slider
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(null);
  const [data, setData] = useState({
    logradouro: "Rua Exemplo",
    bairro: "Bairro Exemplo",
    localidade: "Cidade Exemplo",
    uf: "UF",
  });

  const products = [
    {
      id: 1,
      name: "Quadro BMO",
      images: ["img/download.png", "img/download2.png", "img/download3.png"], //slider
      price: "R$ 29,90",
      description: "Descrição do Quadro BMO.",
    },
    {
      id: 2,
      name: "Quadro X",
      images: ["img/download (1).png"],
      price: "R$ 19,90",
      description: "Descrição da Caneca X.",
    },
    {
      id: 3,
      name: "Quadro Y",
      images: ["img/download (2).png"],
      price: "R$ 39,90",
      description: "Descrição do Produto Y.",
    },
  ];

  useEffect(() => {
    //filtra o produto pelo id que foi passado pela url
    const selectedProduct = products.find((prod) => prod.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  const handleNextImage = () => {
    if (product) {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const handlePrevImage = () => {
    if (product) {
      setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const handleCalculateFrete = () => {
    if (cep) {
      //simulação do frete
      setFrete(`Frete para o CEP ${cep}: R$ 15,00`);
    }
  };

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <header>
        <h1>{product.name}</h1>
      </header>

      <div className="product-container">
        <div className="image-slider">
          <button onClick={handlePrevImage}>&lt;</button>
          <img id="product-image" src={product.images[currentImage]} alt={product.name} />
          <button onClick={handleNextImage}>&gt;</button>
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <div className="button-container">
            <button className="comprar">Comprar</button>
            <button className="adicionar-carrinho">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>

      <div className="descricao">
        <h2>DESCRIÇÃO</h2>
        <p>{product.description}</p>
      </div>

      <div className="frete">
        <h2>SIMULAÇÃO DE FRETE</h2>
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button onClick={handleCalculateFrete}>Calcular Frete</button>
        {frete && <p>{frete}</p>}

        {/*tabela de frete*/}
        {frete && (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>
                  Endereço:
                </th>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  {`${data.logradouro}, ${data.bairro} - ${data.localidade}, ${data.uf}`}
                </td>
              </tr>
              <tr>
                <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>
                  Forma de Envio:
                </th>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>Correios Entrega Normal</td>
              </tr>
              <tr>
                <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>
                  Valor:
                </th>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>Frete Grátis</td>
              </tr>
              <tr>
                <th style={{ textAlign: "left", padding: "8px", border: "1px solid #ddd" }}>
                  Prazo:
                </th>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>Até 7 dia(s) úteis</td>
              </tr>
            </thead>
          </table>
        )}
      </div>

      <div className="trust-messages">
        <div className="message-item">🌎 Envio para todo Brasil</div>
        <div className="message-item">🔒 Site 100% Seguro</div>
        <div className="message-item">😊 Satisfação Garantida</div>
      </div>

      <div className="related-products">
        <h2>PRODUTOS RELACIONADOS</h2>
        <div className="related-product-list">
          {products
            .filter((prod) => prod.id !== product.id)
            .map((prod) => (
              <div className="related-product-item" key={prod.id}>
                <a href={`/produto/${prod.id}`}>
                  <img src={prod.images[0]} alt={`Produto Relacionado ${prod.name}`} />
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;

