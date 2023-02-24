import { atom } from "recoil";

import { FrontRoom } from "@/types/room";

export const roomListState = atom<Array<FrontRoom>>({
  key: "roomListState",
  default: [],
});
