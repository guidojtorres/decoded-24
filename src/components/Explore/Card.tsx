import { FC, useCallback, useState } from "react";

import KeynoteTag from "../../assets/img/keynote-tag.png";
import CardModal from "./CardModal";
import Categoria from "./Categoria";
import { CardType } from "../../utils/types";
import Speaker from "./Speaker";

interface Props extends CardType {}

const Card: FC<Props> = ({
  isKeynote,
  abstract,
  categoria,
  fecha,
  stage,
  dia,
  subcategoria,
  descripcion,
  speakers,
  titulo,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  const fechaDate = new Date(fecha);

  return (
    <>
      <div
        className={`xplore-card ${isKeynote && "card-keynote"}`}
        onClick={() => setModalVisible(true)}
      >
        {isKeynote && <img src={KeynoteTag} className="keynote-tag" />}
        <div className="xplore-card-body">
          <div className="mb-3">
            <Categoria nombre={categoria} />
          </div>
          <h4>{titulo}</h4>
          <p className="desc">{abstract}</p>
          <div className="presentadores">
            {speakers.map((speaker, i) => (
              <Speaker
                nombre={speaker.nombre}
                posicion={speaker.posicion}
                fotoPerfil={
                  //@ts-expect-error Es demasiado largo de tipar este objeto y no vale la pena.
                  speaker.fotoPerfil.data.attributes.formats.thumbnail.url
                }
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="xplore-card-footer">
          <div className="left">
            <span className="fw700">
              {fechaDate.toLocaleTimeString("es-AR")}
            </span>
            <span className="guion">-</span>
            <span>{dia}</span>
          </div>
          <div className="right">
            <span>{stage}</span>
          </div>
        </div>
      </div>
      <CardModal
        abstract={abstract}
        categoria={categoria}
        descripcion={descripcion}
        dia={dia}
        fecha={fechaDate}
        speakers={speakers}
        stage={stage}
        titulo={titulo}
        subcategoria={subcategoria}
        isVisible={modalVisible}
        isKeynote={isKeynote}
        onClose={handleClose}
      />
    </>
  );
};

export default Card;
