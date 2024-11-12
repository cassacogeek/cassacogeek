import React from "react";
const Sacola = () => {
    //armazena produtos iniciando com 1 produto
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Produto 1',
      price: (Math.random() * 100).toFixed(2).replace(".", ","), //preço aleatório
      quantity: 1, //quantidade inicial 1
    }
  ]);
  const [discount, setDiscount] = useState(0); //estado pra armazenar o desconto
  const [coupon, setCoupon] = useState(''); //estado pro valor do cupom
  const [couponMessage, setCouponMessage] = useState(''); //estado pra mensagem do cupom
  const [isCouponApplied, setIsCouponApplied] = useState(false); //estado pra saber se o cupom foi aplicado

  //botão pra adicionar um produto
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Produto ${products.length + 1}`,
      price: (Math.random() * 100).toFixed(2).replace(".", ","), //preço aleatório
      quantity: 1, //quantidade inicial 1
    };
    setProducts([...products, newProduct]);
  };

  //aumenta a quantidade de um produto
  const increaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ));
  };

  //diminui a quantidade de um produto
  const decreaseQuantity = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  //remove um produto
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  //calcula o subtotal (valor de todos produtos sem desconto)
  const calculateSubtotal = () => {
    return products.reduce((acc, product) => acc + parseFloat(product.price.replace(",", ".")) * product.quantity, 0);
  };

  //calcula o total com desconto aplicado
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal * (1 - discount); //aplica o desconto
  };

  //aplica o cupom de desconto
  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'off10') {
      setDiscount(0.1); //aplica 10% de desconto
      setCouponMessage('Cupom adicionado!'); //mensagem de sucesso
      setIsCouponApplied(true); //marca que o cupom foi aplicado
    } else {
      setCouponMessage('Cupom inválido!'); //mensagem de erro
      setIsCouponApplied(false); //não aplica desconto
    }
  };

  //remove o cupom
  const removeCoupon = () => {
    setCoupon('');
    setDiscount(0); //remove o desconto
    setIsCouponApplied(false); //marca que o cupom foi removido
    setCouponMessage(''); //reseta a mensagem de erro ou sucesso
  };

  //calcula o valor do desconto
  const discountAmount = (calculateSubtotal() * discount).toFixed(2).replace(".", ",");

  //limpa a mensagem após 5 segundos
  useEffect(() => {
    if (couponMessage) {
      const timer = setTimeout(() => {
        setCouponMessage('');
      }, 5000); //limpa a mensagem após 5 segundos
      return () => clearTimeout(timer); //limpa o timer
    }
  }, [couponMessage]);
    
    return (
        <div>
            <header>
        <span>Carrinho de compras</span>
      </header>
      
      {/*mensagem de sucesso ou erro do cupom*/}
      {couponMessage && (
        <div style={{
          textAlign: 'center',
          backgroundColor: couponMessage === 'Cupom adicionado!' ? 'green' : 'red',
          color: 'white',
          padding: '10px',
          width: '100%',
          position: 'absolute',
          top: '100px',
          left: '0',
          fontSize: '1.2rem',
          zIndex: '1000',
          opacity: 0.5,
        }}>
          {couponMessage}
        </div>
      )}

      <main>
        
        <button onClick={addProduct}>Adicionar</button>
        <div className="content">
          <section>
            {products.length === 0 ? (
              <p style={{ textAlign: 'center', fontSize: '20px', color: '#666' }}>O carrinho está vazio</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="product">
                          <img src="https://picsum.photos/100/120" alt="Produto" />
                          <div className="info">
                            <div className="name">{product.name}</div>
                            <div className="category">Categoria</div>
                          </div>
                        </div>
                      </td>
                      <td>R$ {product.price}</td>
                      <td>
                        <div className="qty">
                          <button onClick={() => decreaseQuantity(product.id)}><i className="bx bx-minus"></i></button>
                          <span>{product.quantity}</span>
                          <button onClick={() => increaseQuantity(product.id)}><i className="bx bx-plus"></i></button>
                        </div>
                      </td>
                      <td>R$ {(parseFloat(product.price.replace(",", ".")) * product.quantity).toFixed(2).replace(".", ",")}</td>
                      <td>
                        <button className="remove" onClick={() => removeProduct(product.id)}><i className="bx bx-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
          <aside>
            <div className="box">
              <header>Resumo da compra</header>
              <div className="info">
                <div><span>Sub-total</span><span>R$ {calculateSubtotal().toFixed(2).replace(".", ",")}</span></div>
                
                {/*exibe a div span com o desconto*/}
                {isCouponApplied && (
                  <div className="discount">
                    <span>Desconto</span>
                    <span>R$ {discountAmount}</span>
                  </div>
                )}
                <div>
                  <input 
                    type="text" 
                    value={coupon} 
                    onChange={(e) => setCoupon(e.target.value)} 
                    placeholder="Insirir cupom"
                    disabled={isCouponApplied} // Desabilita o input após aplicar o cupom
                  />
                 
                  <button
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: 'none',
                      padding: '5px 15px',
                      margin: '5px 0',
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      
                    }}
                    onClick={isCouponApplied ? removeCoupon : applyCoupon}
                  >
                    {isCouponApplied ? 'Remover' : 'Aplicar'}
                  </button>

                </div>
              </div>
              <footer>
                <span>Total</span>
                <span>R$ {calculateTotal().toFixed(2).replace(".", ",")}</span>
              </footer>
            </div>
            <button>Finalizar Compra</button>
          </aside>
        </div>
      </main>
    </div>
    )
};

export default Sacola;
