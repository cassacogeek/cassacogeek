import React from "react";
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'

const Footer = () => {

    return (
        <footer>
            <div className="bg-[#bdac7f] text-center">
                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-auto p-5">
                    <div className="pe-3 text-justify">
                        <h2 className="text-center">Sobre nós.</h2>
                        <p>A maior Loja Geek para utilidades caseiras da rede. Com uma grande variedade de produtos de decoração, utensílios de cozinha, produtos de cama, mesa e muito mais.</p>
                    </div>
                    <div className="border-2 border-transparent border-x-white dark:border-x-gray-800">
                        <h2>Contatos.</h2>
                        <p>Email: cassacoloja@gmail.com</p>
                        <p>Telefone: (85) 99219-6468</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2>Redes sociais.</h2>
                        <p className="flex justify-center"><a href="" target="_blank"><img src={Facebook} alt="Facebook" /></a></p>
                        <p className="flex justify-center"><a href="" target="_blank"><img src={Instagram} alt="Instagram" /></a></p>
                    </div>
                </div>
                <div className="border-2 border-transparent border-t-white p-2 dark:border-t-gray-800">
                    <p>&copy; 2024 Cassaco Geek. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
