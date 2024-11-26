import kachow from '../assets/kachow.png';
import jureg from '../assets/jureg.png';
import bob from '../assets/bob.png';
import pool from '../assets/pool.png';
import R2D2 from '../assets/R2D2.png';

const Produtos = [
  {
      image: kachow,
      id: 1,
      name: "TV Mcqueen",
      oferta: "",
      price: "R$2000",
      description: "",
      estoque: 1,
      categoria: "Sala"
  },
  {
    image: jureg,
      id: 2,
      name: "Sofa do Shrek",
      oferta: 800,
      price: "R$500",
      description: "",
      estoque: 5,
      categoria: "Sala"
  },
  {
    image: bob,
      id: 3,
      name: "Console Personalizado Bob Esponja",
      oferta: "",
      price: "R$9000",
      description: "",
      estoque: 10,
      categoria: "Sala"
  },
  {
    image: R2D2,
    id: 4,
    name: "Cafeteira Star Wars R2-D2",
    oferta: "",
    price: "R$15",
    description: "",
    estoque: 3,
    categoria: "Cozinha"
},
{
  image: pool,
  id: 5,
  name: "Porta Facas Deadpool",
  oferta: "",
  price: "R$200",
  description: "",
  estoque: 143,
  categoria: "Cozinha"
},
{
  image: "https://via.placeholder.com/300x200?text=Produto",
  id: 6,
  name: "Roupa de Cama Goku",
  oferta: "",
  price: "R$100",
  description: "",
  estoque: 3,
  categoria: "Quarto"
},
{
  image: "https://via.placeholder.com/300x200?text=Produto",
  id: 7,
  name: "Quadro Goku",
  oferta: 50,
  price: "R$49.90",
  description: "",
  estoque: 3,
  categoria: "Quarto"
},
{
  image: "https://via.placeholder.com/300x200?text=Produto",
  id: 8,
  name: "Figure Vegeta",
  oferta: "",
  price: "R$8001",
  description: "",
  estoque: 3,
  categoria: "Quarto"
},
{
  image: "https://via.placeholder.com/300x200?text=Produto",
  id: 9,
  name: "Toalha Naruto",
  oferta:"" ,
  price: "R$29.99",
  description: "",
  estoque: 3,
  categoria: "Banheiro"
},
{
  image: "https://via.placeholder.com/300x200?text=Produto",
  id: 10,
  name: "Jogo de Tapete One Piece",
  oferta: "",
  price: "R$100",
  description: "",
  estoque: 3,
  categoria: "Banheiro"
},
]

const slidesLancamentos = [ Produtos[0], Produtos[1], Produtos[2], Produtos[3], Produtos[4],];
  const slidesOfertas = [ Produtos[5], Produtos[6], Produtos[7], Produtos[8]];
  const slidesMaisVendidos = [ Produtos[1], Produtos[0], Produtos[4], Produtos[2],];

  const slidesCategorias = [
    {
      image: kachow,
      name: "Sala",
    },
    {
      image: R2D2,
      name: "Cozinha",
      },
    {
      image: "https://via.placeholder.com/300x200?text=Produto",
      name: "Quarto",
      },
    {
      image: "https://via.placeholder.com/300x200?text=Produto",
      name: "Banheiro",
      },
  ];


  export { Produtos, slidesCategorias, slidesLancamentos, slidesMaisVendidos, slidesOfertas }