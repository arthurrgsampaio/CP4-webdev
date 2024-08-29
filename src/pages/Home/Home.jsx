import "./home.css"
import Header from "../../components/Header/Header";
import Title from "../../components/Titles/Title";
import Button from "../../components/Button/Button";
import Hero from "../../assets/Hero image.png"
import Card from "../../components/Card/Card";
import Youtube from "../../assets/Youtube.jfif"

const Home = () => {
    return(
        <div id="containerHome">
            <Header selected={"home"}/>
            
            <div id="firstHomeContainer" style={{margin: "2rem 0"}}>
                <div id="textContainer" style={{flex: "1"}}>
                    <Title>
                        Crie seus vídeos online
                    </Title>
                    <p id="textHome">Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                    <Button>
                        Começar agora!
                    </Button>
                </div>
                <div style={{flex: 1}}>
                    <img src={Hero} alt="hero image" />
                </div>
            </div>

            <div id="cardsContainer">
                <Card backColor={"#F1C2B0"} icon={Youtube} number={"01"} title={"Youtube"}>
                    Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.
                </Card>
            </div>
        </div>
    )
}

export default Home;