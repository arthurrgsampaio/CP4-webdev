import "./cardsAbout.css";

export default function CardsAbout({ titulo, conteudo, button }) {
  return (
    <div className="cardsAbout">
      <h3>{titulo}</h3>
        {conteudo}
      <button>{button}</button>
    </div>
  );
}