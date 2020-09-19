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
  list: [
    {
      type: "flat",
      id: 1,
      attributes: {
        title: "3-х комнатная на Минской",
        rooms: 3,
        mainImgSrc:
          "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
        price: 50000,
        address: {
          city: "Tyumen",
          street: "Минская",
          house: "3a",
          room: "123"
        },
        area: 134,
        unit: "квм"
      },
      relationships: {
        type: "agent",
        id: 2,
        attributes: {
          agentImgSrc:
            "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
          first_name: "Василий",
          last_name: "Дроздов",
          middle_name: "Михайлович"
        }
      }
    },
    {
      type: "flat",
      id: 2,
      attributes: {
        title: "1 комнатная на Барабаинской",
        rooms: 2,
        mainImgSrc:
          "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
        price: 50000,
        address: {
          city: "Tyumen",
          street: "Барабинская",
          house: "12",
          room: "45"
        },
        area: 34,
        unit: "квм"
      },
      relationships: {
        type: "agent",
        id: 10,
        attributes: {
          agentImgSrc:
            "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
          first_name: "Михаил",
          last_name: "Иванов",
          middle_name: "Демидович"
        }
      }
    },
    {
      type: "flat",
      id: 3,
      attributes: {
        title: "Квартира Ленина",
        rooms: 4,
        mainImgSrc:
          "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
        price: 50000,
        address: {
          city: "Tyumen",
          street: "Ленина",
          house: "134",
          room: "24"
        },
        area: 134,
        unit: "квм"
      },
      relationships: {
        type: "agent",
        id: 44,
        attributes: {
          agentImgSrc:
            "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
          first_name: "Степан",
          last_name: "Карачаев",
          middle_name: "Иванович"
        }
      }
    }
  ]
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
