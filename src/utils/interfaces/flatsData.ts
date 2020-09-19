export type roomId = number;

export interface IAgentAttributes {
  agentImgSrc: string;
  first_name: string;
  last_name: string;
  middle_name: string;
}

export interface IRoomRelationShips {
  type: string;
  id: number;
  attributes: IAgentAttributes;
}

export interface IRoomAddress {
  city: string;
  street: string;
  house: string;
  room: string;
}

export interface IRoomAttributes {
  title: string;
  mainImgSrc: string;
  price: number;
  rooms: number;
  address: IRoomAddress;
  area: number;
  unit: string;
}

export interface IRoom {
  type: string;
  id: roomId;
  attributes: IRoomAttributes;
  relationships: IRoomRelationShips;
}

export interface IMappedRoom {
  id: roomId;
  isFeatured: boolean;
  title: string;
  address: string;
  areaDesc: string;
  rooms: number;
  price: number;
  imgSrc: string;
  rel: {
    imgSrc: string;
    type: string;
    name: string;
  };
}
