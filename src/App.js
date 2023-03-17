import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Detail from "./components/Detail/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const apiURL = "https://be-a-rym.up.railway.app/api";
  const apiKey = "98f9875a39a4.df6e7fa04c7e61b9cb13";

  const onSearch = (id) => {
    if (characters.name && characters.find((char) => char.id === id)) {
      return alert("El personaje ya fue invocado");
    } else {
      fetch(`${apiURL}/character/${id}?key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters([...characters, data]);
          } else {
            alert("Pasó algo malo");
          }
        });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch}></Nav>

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
