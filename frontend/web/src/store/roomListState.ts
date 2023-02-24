import { atom } from "recoil";

import { Room } from "../types/room";

export const roomListState = atom<Array<Room>>({
  key: "roomListState",
  default: [],
});
