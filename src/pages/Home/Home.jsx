import "./home.css"
import Header from "../../components/Header/Header";
import Title from "../../components/Titles/Title";
import Button from "../../components/Button/Button";
import Hero from "../../assets/Hero image.png"
import Card from "../../components/Card/Card";
import Youtube from "../../assets/Youtube.jfif"
import Tiktok from "../../assets/Tiktok.jfif"
import Facebook from "../../assets/Facebook.jfif" 
import Instagram from "../../assets/Instagram.jfif"

const Home = () => {
    return(
        <div id="containerHome">
            <Header selected={"home"}/>
            
            <div id="firstHomeContainer" style={{margin: "3rem 0"}}>
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
                <Card backColor={"red"} icon={Youtube} number={"01"} title={"Youtube"}>
                    Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.
                </Card>
                <Card backColor={"yellow"} icon={Tiktok} number={"02"} title={"Tiktok"}>
                    Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.
                </Card>
                <Card backColor={"green"} icon={Facebook} number={"03"} title={"Facebook"}>
                    Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook. 
                </Card>
                <Card backColor={"blue"} icon={Instagram} number={"04"} title={"Instagram"}>
                Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.
                </Card>
            </div>
        </div>
    )
}

export default Home;