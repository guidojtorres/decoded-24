//Front end types

export type CardType = {
  categoria: string;
  subcategoria: string;
  descripcion: string;
  isKeynote: boolean;
  titulo: string;
  abstract: string;
  fecha: Date;
  stage: string;
  speakers: SpeakerType[];
  dia: string;
};

export type SpeakerType = {
  biography: string;
  nombre: string;
  posicion: string;
  fotoPerfil: unknown;
};

//Response types

export interface StrapiResponseType {
  data: StrapiCharlaType[];
  meta: MetaType;
}

export interface StrapiCharlaType {
  id: number;
  attributes: StrapiCharlaAttributesType;
}

export type StrapiCharlaAttributesType = {
  Titulo: string;
  Abstract: string;
  Descripcion: string;
  FechaHora: Date;
  URLCharla: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  isKeynote: boolean;
  categorias_charla: CategoriasCharla;
  subcategoria_charla: CategoriasCharla;
  stage: CategoriasCharla;
  dia: CategoriasCharla;
  speakers: Speakers;
};

export interface CategoriasCharla {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface Speakers {
  data: Datum[];
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  nombre: string;
  posicion: string;
  biography: string;
  createdAt: Date;
  fotoPerfil: unknown;
  updatedAt: Date;
}

export interface DataAttributes {
  Nombre: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MetaType {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
