import { Member } from "./member";

export type Room = {
  roomId: number;
  roomName: string;
  memberAmount: number;
  summary: string;
  isOpen: boolean;
  lastUpdated: string;
  members: Array<Member>;
  roomMaker: string;
};
