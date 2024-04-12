import { FC, useContext, useMemo } from "react";
import CardGrid from "./CardGrid";
import { ResponseContext } from "../../Context";
import { deconstructCards } from "../../utils/functions";

interface Props {
  isVisible: boolean;
}

const ExploreSection: FC<Props> = ({ isVisible }) => {
  const response = useContext(ResponseContext);
  const cardsArray = useMemo(() => {
    return deconstructCards(response.data);
  }, [response]);
  return (
    isVisible && (
      <section className="explore-section">
        <div className="main-container">
          <h4 className="explore-title">Encontrá lo que más te interese</h4>
          <div className="mini-container">
            <div className="input-col">
              <input
                type="text"
                placeholder="Buscar por palabra clave, speaker, tema..."
                className="search-input"
              />
              <div className="input-row">
                <select name="dia" id="" className="select dia">
                  <option disabled selected>
                    Día
                  </option>
                </select>
                <select name="categoria" id="" className="select">
                  <option disabled selected>
                    Categoría
                  </option>
                </select>
                <select name="tematica" id="" className="select">
                  <option disabled selected>
                    Temática
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <CardGrid cardsArray={cardsArray} />
        </div>
      </section>
    )
  );
};

export default ExploreSection;
