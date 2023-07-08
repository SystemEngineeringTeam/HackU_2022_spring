import { useCallback, useState } from "react";
import axios from "axios";

import { Room } from "@/types/room";
import { useRecoilState } from "recoil";
import { roomListState } from "@/store/roomListState";
import { tagsParse } from "../util/parseTags";

type Props = {
  roomIds: number[];
};

export const useGetRoomList = () => {
  const [roomList, setRoomList] = useRecoilState(roomListState);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchRoomList = useCallback(async (props: Props) => {
    setIsLoaded(false);
    setIsError(false);

    try {
      const response = await axios.get<Room[]>("/api/room", {
        params: {
          roomId: String(props.roomIds),
        },
      });
      const roomList = response.data.map(tagsParse);
      setIsLoaded(true);
      setRoomList(roomList);
    } catch (e) {
      if (e instanceof Error) {
        setIsError(true);
        setError(e);
      }
    }
  }, [setRoomList]);

  return { fetchRoomList, isLoaded, roomList, isError, error };
};
