const axios = require("axios");

const getCharById = (res, ID) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => {});
};

module.exports = getCharById;
