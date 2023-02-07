import React, { useEffect, useState } from "react";
import Details from "./Details/index.jsx";
import Photos from "./Photos/index.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const CatDetails = () => {
  const { breedId } = useParams();
  const [breedInfo, setBreedInfo] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    if (breedInfo === null) {
      axios
        .get(`${import.meta.env.VITE_API_URI}/api/breed/details/${breedId}`, {
          signal: controller.signal,
        })
        .then((res) => {
          setBreedInfo(res.data);
        });
    }

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {breedInfo === null ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <>
          <Details breedInfo={breedInfo} />
          <Photos images={breedInfo.images} />
        </>
      )}
    </>
  );
};

export default CatDetails;
