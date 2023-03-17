import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavourites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };

    case ADD_FAV:
      return {
        ...state,
        myFavourites: [...state.myFavourites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavourites: state.myFavourites.filter(
          (char) => char.id !== action.payload
        ),
      };
  }
};

export default rootReducer;
