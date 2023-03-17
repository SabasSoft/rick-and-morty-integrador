import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { detailId } = useParams();
  const apiURL = "https://be-a-rym.up.railway.app/api";
  const apiKey = "98f9875a39a4.df6e7fa04c7e61b9cb13";

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${apiURL}/character/${detailId}?key=${apiKey}`).then((response) =>
      setCharacter(response.data)
    );
  }, [detailId]);

  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Origin: {character.origin?.name}</p>
          <img src={character.image} alt="imagen"></img>
        </>
      ) : (
        <h3>Loading info...</h3>
      )}
    </div>
  );
};

export default Detail;
