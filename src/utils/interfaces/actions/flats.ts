import {IRoom, roomId} from "../flatsData";

const prefix: string = "FLATS";

export const GET_FLATS_PENDING: string = `${prefix}/GET_FLATS_PENDING`;
export const GET_FLATS_FAIL: string = `${prefix}/GET_FLATS_FAIL`;
export const GET_FLATS_DONE: string = `${prefix}/GET_FLATS_DONE`;

export const ADD_FEATURED: string = `${prefix}/ADD_FEATURED`;
export const REMOVE_FEATURED: string = `${prefix}/REMOVE_FEATURED`;

export interface IGetFlatsDone {
  type: typeof GET_FLATS_DONE;
  payload: { list: IRoom[] };
}

export interface IGetFlatsFail {
  type: typeof GET_FLATS_FAIL;
  payload: { error: string };
}

export interface IGetFlatsPending {
  type: typeof GET_FLATS_PENDING;
}

export interface IAddFeatured {
  type: typeof ADD_FEATURED;
  payload: {id: roomId}
}

export interface IRemoveFeatured {
  type: typeof REMOVE_FEATURED;
  payload: {id: roomId}
}