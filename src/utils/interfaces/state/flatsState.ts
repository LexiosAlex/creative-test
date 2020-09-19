import { IRoom, roomId } from "../flatsData";
import { IAsyncReducer } from "../AsyncReducer";

export interface IFlatsHeapState {
  list: IRoom[];
}

export interface IFlatsState {
  heap: IFlatsHeapState;
  userFeatured: IFeaturedFlatsState;
  asyncStatus: IAsyncReducer;
}

export interface IAppState {
  flats: IFlatsState;
}

export interface IFeaturedFlatsState {
  list: Array<roomId>
}