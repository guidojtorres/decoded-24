import { FC } from "react";

interface Props {
  nombre: string;
}

const Categoria: FC<Props> = ({ nombre }) => {
  return (
    <div className="categoria">
      <div className="punto" style={{ background: "#FBDC3C" }}></div>
      <span>{nombre}</span>
    </div>
  );
};

export default Categoria;
