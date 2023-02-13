import { Member } from "./member";

export type Room = {
  roomId: number;
  roomName: string;
  memberAmount: number;
  summary: string;
  isOpen: boolean;
  lastUpdate: string;
  roomChildren: Array<string>;
  roomParent: number | null;
  members: Array<Member>;
  roomMaker: string;
};
