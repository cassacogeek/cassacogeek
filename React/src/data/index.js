import kachow from '../assets/kachow.png';
import jureg from '../assets/jureg.png';
import bob from '../assets/bob.png';
import pool from '../assets/pool.png';
import R2D2 from '../assets/R2D2.png';

const Produtos = [
  {
      imgSrc: kachow,
      id: 1,
      name: "TV Mcqueen",
      oferta: "",
      preco: 2000,
      descricao: "",
      estoque: 1,
      categoria: "Sala"
  },
  {
      imgSrc: jureg,
      id: 2,
      name: "Sofa do Shrek",
      oferta: 800,
      preco: 500,
      descricao: "",
      estoque: 5,
      categoria: "Sala"
  },
  {
      imgSrc: bob,
      id: 3,
      name: "Console Personalizado Bob Esponja",
      oferta: "",
      preco: 9000,
      descricao: "",
      estoque: 10,
      categoria: "Sala"
  },
  {
    imgSrc: R2D2,
    id: 4,
    name: "Cafeteira Star Wars R2-D2",
    oferta: "",
    preco: 15,
    descricao: "",
    estoque: 3,
    categoria: "Cozinha"
},
{
  imgSrc: pool,
  id: 5,
  name: "Porta Facas Deadpool",
  oferta: "",
  preco: 200,
  descricao: "",
  estoque: 143,
  categoria: "Cozinha"
},
{
  imgSrc: "https://via.placeholder.com/300x200?text=Produto",
  id: 6,
  name: "Roupa de Cama Goku",
  oferta: "",
  preco: 100,
  descricao: "",
  estoque: 3,
  categoria: "Quarto"
},
{
  imgSrc: "https://via.placeholder.com/300x200?text=Produto",
  id: 7,
  name: "Quadro Goku",
  oferta: 50,
  preco: 49.90,
  descricao: "",
  estoque: 3,
  categoria: "Quarto"
},
{
  imgSrc: "https://via.placeholder.com/300x200?text=Produto",
  id: 8,
  name: "Figure Vegeta",
  oferta: "",
  preco: 8001,
  descricao: "",
  estoque: 3,
  categoria: "Quarto"
},
{
  imgSrc: "https://via.placeholder.com/300x200?text=Produto",
  id: 9,
  name: "Toalha Naruto",
  oferta:"" ,
  preco: 29.99,
  descricao: "",
  estoque: 3,
  categoria: "Banheiro"
},
{
  imgSrc: "https://via.placeholder.com/300x200?text=Produto",
  id: 10,
  name: "Jogo de Tapete One Piece",
  oferta: "",
  preco: 100,
  descricao: "",
  estoque: 3,
  categoria: "Banheiro"
},
]

const slidesLancamentos = [ Produtos[0], Produtos[1], Produtos[2], Produtos[3], Produtos[4],];
  const slidesOfertas = [ Produtos[5], Produtos[6], Produtos[7], Produtos[8]];
  const slidesMaisVendidos = [ Produtos[1], Produtos[0], Produtos[4], Produtos[2],];

  const slidesCategorias = [
    {
      imgSrc: kachow,
      name: "Sala",
    },
    {
      imgSrc: R2D2,
      name: "Cozinha",
      },
    {
      imgSrc: "https://via.placeholder.com/300x200?text=Produto",
      name: "Quarto",
      },
    {
      imgSrc: "https://via.placeholder.com/300x200?text=Produto",
      name: "Banheiro",
      },
  ];


  export { Produtos, slidesCategorias, slidesLancamentos, slidesMaisVendidos, slidesOfertas }