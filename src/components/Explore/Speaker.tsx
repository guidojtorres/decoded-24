import { FC } from "react";
interface Props {
  nombre: string;
  posicion: string;
  fotoPerfil: string;
}

const Speaker: FC<Props> = ({ nombre, posicion, fotoPerfil }) => {
  return (
    <div className="presentador-flex">
      <img src={fotoPerfil} alt="" />
      <div className="presentador-texto">
        <h6>{nombre}</h6>
        <p>{posicion}</p>
      </div>
    </div>
  );
};

export default Speaker;
