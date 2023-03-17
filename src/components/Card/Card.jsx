import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";

function Card(props) {
  const { addFav, removeFav } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button
        onClick={() => props.onClose(props.id)}
        className={style.closeButton}
      >
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2>Name:{props.name}</h2>
      </Link>

      <h2>Species:{props.species}</h2>
      <h2>Gender:{props.gender}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
