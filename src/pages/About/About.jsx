import "./about.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import CardsAbout from "../../components/CardsAbout/CardsAbout";
import cellphone1 from "../../assets/cellphone1.png";
import cellphone2 from "../../assets/cellphone2.png";
import womanCellphone from "../../assets/womanCellphone.png";

export default function About() {
  return (
    <>
      <Header selected={"sobre"}/>

      <header className="bannerAbout">
        <div className="bannerText">
          <h1>Bem vindo a revolução dos vídeos!</h1>
          <p>
            Somos uma startup com o objetivo de facilitar a produção de conteúdo
            em larga escala com qualidade profissional, capaz de atingir uma
            audiência de milhões de seguidores.
          </p>
          <Button texto={"Baixe o app"} />
        </div>
        <div className="banner-fotos">
          <img
            src={cellphone1}
            alt="cellphone1"
          />
          <img
            src={cellphone2}
            alt="cellphone2"
          />
        </div>
      </header>

      <main className="cardsAbout">
        <h2>Planos</h2>
        <div className="cards">
          <CardsAbout
            titulo={"Individual"}
            conteudo={
              <div className="conteudo">
                <h4>1 Usuário</h4>
                <p>10 Vídeos R$15</p>
              </div>
            }
            button={"Cadastrar"}
          />
          <CardsAbout
            titulo={"Profissional - Times"}
            conteudo={
              <div className="conteudo">
                <div>
                  <h4>1 - 10 Usuários</h4>
                  <p>Vídeos Ilimitados R$40</p>
                </div>
                <div>
                  <h4>+10 Usuários</h4>
                  <p>Vídeos Ilimitados R$20</p>
                </div>
              </div>
            }
            button={"Cadastrar"}
          />
          <CardsAbout
            titulo={"Corporativo"}
            conteudo={
              <div className="conteudo">
                <img
                  src={womanCellphone}
                  alt="mulher com celular"
                />
              </div>
            }
            button={"Entrar Em Contato"}
          />
        </div>
      </main>
    </>
  );
}
