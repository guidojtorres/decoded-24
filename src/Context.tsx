import { FC, ReactNode, createContext, useMemo } from "react";
import useFetchedData from "./utils/hooks";
import { StrapiResponseType } from "./utils/types";
import qs from "qs";

export const ResponseContext = createContext<StrapiResponseType>(
  {} as StrapiResponseType
);

interface Props {
  children: ReactNode;
}

export const ResponseContextProvider: FC<Props> = ({ children }) => {
  const options = useMemo(() => {
    return {
      headers: {
        Authorization:
          "Bearer aadc45b8be261e5c5a52dec776265c7d919982885b90b5705c045fcc0b55f7387e81d3fb72d034448f285422d7036cab9ba5e9b153aa616b707b5ff0bda7ed7de6a7f3e6de0b26deca9d10395e67f4501dea2a5f13c182ee69427be9b1bb5cfcbfc543fe1a76e1214d318fd2ce82c427e68fd47010276ada2b6bc37b6d6f7be2",
      },
    };
  }, []);

  // const queryString = qs.stringify({
  //   populate: {
  //     categorias_charla: {
  //       fields: ["Nombre"],
  //     },
  //     subcategoria_charla: {
  //       fields: ["Nombre"],
  //     },
  //     speakers: {
  //       populate: {
  //         fotoPerfil: {
  //           fields: ["url"],
  //         },
  //       },
  //     },
  //   },
  // });

  const queryString = qs.stringify({
    populate: {
      categorias_charla: {
        fields: ["Nombre"],
      },
      subcategoria_charla: {
        fields: ["Nombre"],
      },
      stage: {
        fields: ["Nombre"],
      },
      dia: {
        fields: ["Nombre"],
      },
      speakers: {
        populate: {
          fotoPerfil: {
            formats: {
              fields: ["thumbnail"],
              // thumbnail: {
              //   fields: ["url"],
              // },
            },
          },
        },
      },
    },
  });

  const { data, isLoading, error } = useFetchedData(
    `https://docker-v2-e516e4728f14.herokuapp.com/api/charlas?${queryString}`,
    options
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    console.log(error);
    return <div>Error!</div>;
  }

  return (
    <ResponseContext.Provider value={data}>{children}</ResponseContext.Provider>
  );
};
