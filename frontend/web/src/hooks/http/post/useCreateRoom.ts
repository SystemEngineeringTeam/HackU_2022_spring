import { FrontRoom, Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";
import { tagsParse } from "../util/parseTags";

type Props = {
  roomName: string;
  summary?: string;
  roomMaker: string;
};

export const useCreateRoom = () => {
  const [room, setRoom] = useState<undefined | FrontRoom>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const createRoom = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.post<Room>('/api/room', {
          roomName: props.roomName,
          roomMaker: props.roomMaker,
          summary: props.summary
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        const room = tagsParse(response.data);
        setIsLoaded(true);
        setRoom(room);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { createRoom, isLoaded, room, isError, error };
};
