import React from "react";
import "./home.css"
import Header from "../../components/Header/Header";
import Title from "../../components/Titles/Title";
import Button from "../../components/Button/Button";

const Home = () => {
    return(
        <div id="containerHome">
            <Header selected={"home"}/>
            
            <div>
                <Title>
                    Crie seus vídeos online
                </Title>
                <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                <Button>
                    Baixe o app
                </Button>
            </div>
        </div>
    )
}

export default Home;