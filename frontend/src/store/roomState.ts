import { atom } from "recoil";

import { FrontRoom } from "@/types/room";

export const roomState = atom<FrontRoom>({
  key: "roomState",
  default: {
    roomId: 0, // string 部屋ID
    roomName: "", // string 部屋の名前
    memberAmount: -1, // number その部屋にいる参加者の総数
    summary: "", // string 部屋の概要
    isOpen: true, // boolean 参加者受付中かどうか
    lastUpdate: "2023-02-20T16:28:06+09:00", //string 最終更新日 ISO形式
    members: [],
    roomMaker: "", // string 部屋を作った人の名前
    tags: [] // string[] 部屋に存在するタグの一覧
  }
});
