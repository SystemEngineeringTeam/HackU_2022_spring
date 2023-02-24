import { useCallback, useState } from "react";
import axios from "axios";

import { Room } from "@/types/room";
import { useRecoilState } from "recoil";
import { roomState } from "@/store/roomState";
import { tagsParse } from "../util/parseTags";

type Props = {
  roomId: number;
};

export const useGetRoom = () => {
  const [room, setRoom] = useRecoilState(roomState);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchRoom = useCallback(async (props: Props) => {
    setIsLoaded(false);
    setIsError(false);

    try {
      const response = await axios.get<Room[]>("/api/room", {
        params: {
          roomId: String(props.roomId),
        },
      });
      const [room] = response.data.map(tagsParse);
      setIsLoaded(true);
      setRoom(room);
    } catch (e) {
      if (e instanceof Error) {
        setIsError(true);
        setError(e);
      }
    }
  }, [setRoom]);

  return { fetchRoom, isLoaded, room, isError, error };
};
