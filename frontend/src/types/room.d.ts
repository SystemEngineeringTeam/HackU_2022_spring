import { Member } from "./member";

export type Room = {
  roomId: number;
  roomName: string;
  memberAmount: number;
  summary: string;
  isOpen: boolean;
  lastUpdate: string;
  members: Array<Member>;
  roomMaker: string;
  tags: string;
};

export type FrontRoom = Omit<Room, 'tags'> & { tags: string[] };
