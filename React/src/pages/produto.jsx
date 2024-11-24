import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  //capturar o id da url
import "./styles.css";

const App = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); //pegar o id da url

  const products = [
    { id: 1, name: "Quadro BMO", image: "img/download.png", price: "R$ 29,90", description: "Descrição do Quadro BMO." },
    { id: 2, name: "Quadro X", image: "img/download (1).png", price: "R$ 19,90", description: "Descrição da Caneca X." },
    { id: 3, name: "Quadroo Y", image: "img/download (2).png", price: "R$ 39,90", description: "Descrição do Produto Y." },
    //adicionar conforme necessário 
  ];

  useEffect(() => {
    //filtrar o produto pelo id que foi passado pela url
    const selectedProduct = products.find((prod) => prod.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]); //quando productId mudar a página atualiza

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
          <img id="product-image" src={product.image} alt={product.name} />
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

      <div className="related-products">
        <h2>PRODUTOS RELACIONADOS</h2>
        <div className="related-product-list">
          {products.map((prod) => (
            <div className="related-product-item" key={prod.id}>
              <a href={/produto/${prod.id}}>
                <img src={prod.image} alt={Produto Relacionado ${prod.name}} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
