import { createSelector } from "reselect";
import { IAppState, IFlatsState } from "../utils/interfaces/state/flatsState";
import {IMappedRoom} from "../utils/interfaces/flatsData";

const getFlatsState = (state: IAppState): IFlatsState => state.flats;
const getHeap = createSelector([getFlatsState], flats => flats.heap);
const getStatus = createSelector([getFlatsState], flats => flats.asyncStatus);
const getFeatured = createSelector(
  [getFlatsState],
  flats => flats.userFeatured
);

const getFilteredHeap = createSelector(
  [getHeap, getFeatured],
  (heap, featured) => {
    return heap.list.map(room => {
      const {
        title,
        rooms,
        price,
        mainImgSrc,
        unit,
        area,
        address
      } = room.attributes;
      const {
        first_name,
        last_name,
        middle_name,
        agentImgSrc
      } = room.relationships.attributes;
      const { relationships, type } = room;

      const parsedType = type === "flat" ? "квартира" : "";
      const parsedUnits = unit === "квм" ? "м²" : "";
      return {
        id: room.id,
        isFeatured: Boolean(featured.list.find(id => room.id === id)),
        title,
        address: Object.values(address).join(),
        areaDesc: `${parsedType} ${area}  ${parsedUnits} ${rooms}-комнатная`,
        rooms,
        price,
        imgSrc: mainImgSrc,
        rel: {
          type: relationships.type === "agent" && "агент",
          name: `${first_name} ${middle_name} ${last_name}`,
          imgSrc: agentImgSrc
        }
      };
    });
  }
);

export default {
  getFilteredHeap,
  getStatus
};
