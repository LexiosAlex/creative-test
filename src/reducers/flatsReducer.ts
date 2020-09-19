import { combineReducers } from "redux";

import {
  GET_FLATS_PENDING,
  GET_FLATS_DONE,
  GET_FLATS_FAIL,
  ADD_FEATURED,
  REMOVE_FEATURED
} from "../utils/interfaces/actions/flats";
import { createAsyncStateReducer } from "./helpers/asyncReducer";
import {
  IFlatsHeapState,
  IFeaturedFlatsState
} from "../utils/interfaces/state/flatsState";

const initialHeapState: IFlatsHeapState = {
  list: []
};

const featuredFlatsInitialState: IFeaturedFlatsState = {
  list: []
};

const heapReducer = (state = initialHeapState, { type, payload }) => {
  switch (type) {
    case GET_FLATS_DONE:
      return payload;
    default:
      return state;
  }
};

const userFeaturedReducer = (
  state = featuredFlatsInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_FEATURED:
      return { list: [...state.list, payload.id] };
    case REMOVE_FEATURED:
      return { list: state.list.filter(id => id !== payload.id) };

    default:
      return state;
  }
};

export default combineReducers({
  heap: heapReducer,
  userFeatured: userFeaturedReducer,
  asyncStatus: createAsyncStateReducer(
    GET_FLATS_PENDING,
    GET_FLATS_DONE,
    GET_FLATS_FAIL
  )
});
