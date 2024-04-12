import { CardType, StrapiCharlaType } from "./types";

export const deconstructCards = (data: StrapiCharlaType[]) => {
  const cardsArray = data.map((charlaEntity) => {
    const charla = charlaEntity.attributes;

    const card: CardType = {} as CardType;
    card.titulo = charla.Titulo;
    card.abstract = charla.Abstract;
    card.categoria = charla.categorias_charla.data.attributes.Nombre;
    card.isKeynote = charla.isKeynote;
    card.subcategoria = charla.subcategoria_charla.data.attributes.Nombre;
    card.stage = charla.stage.data.attributes.Nombre;
    card.fecha = charla.FechaHora;
    card.dia = charla.dia.data.attributes.Nombre;
    card.descripcion = charla.Descripcion;

    card.speakers = charla.speakers.data.map((speaker) => speaker.attributes);

    return card;
  });

  return cardsArray;
};
