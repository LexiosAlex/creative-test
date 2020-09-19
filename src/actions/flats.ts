import {
  GET_FLATS_PENDING,
  GET_FLATS_DONE,
  GET_FLATS_FAIL,
  ADD_FEATURED,
  REMOVE_FEATURED,
  IAddFeatured,
  IRemoveFeatured,
  IGetFlatsDone,
  IGetFlatsFail,
  IGetFlatsPending
} from "../utils/interfaces/actions/flats";
import { roomId } from "../utils/interfaces/flatsData";

export const addFeatured = (id: roomId): IAddFeatured => ({
  type: ADD_FEATURED,
  payload: { id }
});

export const removeFeatured = (id: roomId): IRemoveFeatured => ({
  type: REMOVE_FEATURED,
  payload: { id }
});

export const getFlatsPending = ():IGetFlatsPending => ({
  type: GET_FLATS_PENDING,
})

export const getFlatsDone = (list):IGetFlatsDone => ({
  type: GET_FLATS_DONE,
  payload: {list}
})

export const getFlatsFail = (error):IGetFlatsFail => ({
  type: GET_FLATS_FAIL,
  payload: {error}
})