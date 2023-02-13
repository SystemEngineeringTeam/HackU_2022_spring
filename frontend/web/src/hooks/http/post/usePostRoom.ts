import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomName: string;
  roomMaker: string;
  parent?: string;
};

export const usePostRoom = () => {
  const [createdRoom, setCreatedRoom] = useState<undefined | Room[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const postRoom = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.post<Room[]>('/api/room', {
          roomName: props.roomName,
          roomMaker: props.roomMaker,
          parent: props.parent
        });
        setIsLoaded(true);
        setCreatedRoom(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { postRoom, isLoaded, allRooms: createdRoom, isError, error };
};
