import KeynoteTag from "../../assets/img/keynote-tag.png";
import Calendar from "../../assets/img/calendar.svg";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Categoria from "./Categoria";
import { CardType } from "../../utils/types";

interface Props extends CardType {
  isVisible?: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

interface ModalSpeakerProps {
  nombre: string;
  posicion: string;
  fotoPerfil: string;
}

const ModalSpeaker: FC<ModalSpeakerProps> = ({
  nombre,
  posicion,
  fotoPerfil,
}) => {
  return (
    <div className="speaker">
      <img src={fotoPerfil} alt="" />
      <div>
        <p>{nombre}</p>
        <span>{posicion}</span>
      </div>
    </div>
  );
};

const CardModal: FC<Props> = ({
  isVisible,
  isKeynote,
  onClose,
  categoria,
  dia,
  fecha,
  speakers,
  descripcion,
  stage,
  titulo,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(false);
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
  return (
    isVisible && (
      <div className="modal-overlay">
        <div className="card-modal" ref={modalRef}>
          <div className="cm-header">
            <div className="date-flex">
              <p className="time">{fecha.toLocaleTimeString("es-AR")}</p>
              <div className="divider"></div>
              <span className="fw700">{dia}</span>
              <span>20/04</span>
            </div>
            <div className="stage">{stage}</div>
          </div>
          <div className="cm-body">
            <div className="cm-categoria">
              {isKeynote && <img src={KeynoteTag} alt="" />}
              <Categoria nombre={categoria} />
            </div>
            <h4>{titulo}</h4>
            <p className="description">{descripcion}</p>
            <p className="speakers">Speakers:</p>
            <div className="speakers-flex">
              {speakers.map((speaker, i) => (
                <ModalSpeaker
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

            <div className="cm-footer">
              <button className="empty-outline-btn">
                <img src={Calendar} alt="" />
                <span>Agendar evento</span>
              </button>
              <button className="filled-outline-btn">
                <span>QUIERO INSCRIBIRME</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CardModal;
