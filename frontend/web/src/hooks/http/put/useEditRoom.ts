import { useCallback, useState } from "react";
import axios from "axios";

import { FrontRoom, Room } from "@/types/room";
import { tagsParse } from "../util/parseTags";

type Props = {
  roomId: number;
  roomName?: string;
  summary?: string;
  isOpen?: boolean;
  tags?: string[];
};

export const useEditRoom = () => {
  const [room, setRoom] = useState<undefined | FrontRoom>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const editRoom = useCallback(async (props: Props) => {
    setIsLoaded(false);
    setIsError(false);

    try {
      const response = await axios.put<Room>(`/api/room/${props.roomId}`, {
        roomName: props.roomName,
        summary: props.summary,
        isOpen: props.isOpen,
        tags: props.tags?.join(","),
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
  }, []);

  return { editRoom, isLoaded, room, isError, error };
};
