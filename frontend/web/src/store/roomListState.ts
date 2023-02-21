import { atom } from "recoil";

import { Room } from "../types/room";

export const roomListState = atom<Array<Room>>({
  key: "roomListState",
  default: [
    {
      roomId: 1, // string 部屋ID
      roomName: "成人式2次会", // string 部屋の名前
      memberAmount: 15, // number その部屋にいる参加者の総数
      summary: "カラオケ：ここにある", // string 部屋の概要
      isOpen: true, // boolean 参加者受付中かどうか
      lastUpdate: "2023-02-20T13:11:22+09:00", //string 最終更新日 ISO形式
      members: [
        {
          memberId: 1, // string ユーザーId
          name: "たなか", // string ユーザーの名前
          comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
          tag: "カラオケ",
        },
        {
          memberId: 2, // string ユーザーId
          name: "すずき",
          comment: "",
          tag: "居酒屋",
        },
        {
          memberId: 3, // string ユーザーId
          name: "やまだ", // string ユーザーの名前
          comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
          tag: "ボーリング",
        },
        {
          memberId: 4, // string ユーザーId
          name: "みずたに",
          comment: "",
          tag: "カラオケ",
        },
        {
          memberId: 5, // string ユーザーId
          name: "すぎやま", // string ユーザーの名前
          comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
          tag: "カラオケ",
        },
        {
          memberId: 6, // string ユーザーId
          name: "はっとり",
          comment: "",
          tag: "居酒屋",
        },
        {
          memberId: 7, // string ユーザーId
          name: "さとう", // string ユーザーの名前
          comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
          tag: "カラオケ",
        },
        {
          memberId: 8, // string ユーザーId
          name: "なるせ",
          comment: "",
          tag: "ボーリング",
        },
        {
          memberId: 9, // string ユーザーId
          name: "みつや", // string ユーザーの名前
          comment: "3000円以内のお店がいいです", // string 備考欄（使わないかも）
          tag: "居酒屋",
        },
        {
          memberId: 10, // string ユーザーId
          name: "さかもと",
          comment: "吐きそう",
          tag: "カラオケ",
        },
      ],
      roomMaker: "たなか", // string 部屋を作った人の名前}
    },
    {
      roomId: 2, // string 部屋ID
      roomName: "追い出し会", // string 部屋の名前
      memberAmount: 12, // number その部屋にいる参加者の総数
      summary: "カラオケ：ここにある", // string 部屋の概要
      isOpen: true, // boolean 参加者受付中かどうか
      lastUpdate: "2022-05-09T00:08:06+09:00", //string 最終更新日 ISO形式
      members: [],
      roomMaker: "たなか", // string 部屋を作った人の名前}
    },
    {
      roomId: 3, // string 部屋ID
      roomName: "応仁の乱", // string 部屋の名前
      memberAmount: 18, // number その部屋にいる参加者の総数
      summary: "お酒美味しい〜", // string 部屋の概要
      isOpen: true, // boolean 参加者受付中かどうか
      lastUpdate: "1467-05-09T00:08:06+09:00", //string 最終更新日 ISO形式
      members: [],
      roomMaker: "たなか", // string 部屋を作った人の名前}
    },
    {
      roomId: 4, // string 部屋ID
      roomName: "新入生歓迎会", // string 部屋の名前
      memberAmount: 5, // number その部屋にいる参加者の総数
      summary: "新刊BBQ", // string 部屋の概要
      isOpen: true, // boolean 参加者受付中かどうか
      lastUpdate: "2022-05-09T00:08:06+09:00", //string 最終更新日 ISO形式
      members: [],
      roomMaker: "たなか", // string 部屋を作った人の名前}
    },
    {
      roomId: 5, // string 部屋ID
      roomName: "クリスマスパーティー", // string 部屋の名前
      memberAmount: 55, // number その部屋にいる参加者の総数
      summary: "メリクリ！", // string 部屋の概要
      isOpen: true, // boolean 参加者受付中かどうか
      lastUpdate: "2023-01-09T00:08:06+09:00", //string 最終更新日 ISO形式
      members: [],
      roomMaker: "たなか", // string 部屋を作った人の名前}
    },
    {
      roomId: 6, // string 部屋ID
      roomName: "田代砲事件", // string 部屋の名前
      memberAmount: 55, // number その部屋にいる参加者の総数
      summary: "メリクリ！", // string 部屋の概要
      isOpen: true, // boolean 参加者受付中かどうか
      lastUpdate: "2002-01-09T00:08:06+09:00", //string 最終更新日 ISO形式
      members: [],
      roomMaker: "たなか", // string 部屋を作った人の名前}
    },
  ],
});
