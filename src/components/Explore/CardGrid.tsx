import { FC } from "react";
import { CardType } from "../../utils/types";
import Card from "./Card";

interface Props {
  cardsArray: CardType[];
}
const CardGrid: FC<Props> = ({ cardsArray }) => {
  return (
    <div className="xplore-card-grid">
      {cardsArray.map((card, i) => (
        <Card
          abstract={card.abstract}
          categoria={card.categoria}
          fecha={card.fecha}
          isKeynote={card.isKeynote}
          stage={card.stage}
          subcategoria={card.subcategoria}
          speakers={card.speakers}
          titulo={card.titulo}
          dia={card.dia}
          descripcion={card.descripcion}
          key={i}
        />
      ))}
    </div>
  );
};

export default CardGrid;
