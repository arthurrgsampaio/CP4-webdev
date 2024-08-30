import React from 'react'
import "./contato.css";
import instagram from "../../assets/instagram2.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import Header from '../../components/Header/Header';

const Contato = () => {
  return (
    <div className="container">
      <Header selected={"contato"}/>

      <div className="contatoPage">
        <div className="esquerda">
          <h2>Dúvidas e suporte, entre em contato:</h2>
          <div className="icones">
                <a href="#"><img src={twitter} alt="twitter" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={discord} alt="discord" /></a>
          </div>
        </div>
        <div className="direita">
          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="texto" id="nome" name="nome" required />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="messagem">Mensagem:</label>
            <textarea id="messagem" name="messagem" required></textarea>
            <button type="enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;

