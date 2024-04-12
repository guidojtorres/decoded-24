export async function getCharlas() {
  const res = await fetch(
    "https://docker-v2-e516e4728f14.herokuapp.com/api/charlas?populate=*",
    {
      headers: {
        Authorization:
          "Bearer aadc45b8be261e5c5a52dec776265c7d919982885b90b5705c045fcc0b55f7387e81d3fb72d034448f285422d7036cab9ba5e9b153aa616b707b5ff0bda7ed7de6a7f3e6de0b26deca9d10395e67f4501dea2a5f13c182ee69427be9b1bb5cfcbfc543fe1a76e1214d318fd2ce82c427e68fd47010276ada2b6bc37b6d6f7be2",
      },
    }
  );
  const json = await res.json();
  return json;
}
