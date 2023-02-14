import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = Partial<Room> & Pick<Room, 'roomId'>;

export const useEditRoom = () => {
  const [room, setRoom] = useState<undefined | Room[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const editRoom = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.post<Room[]>(`/api/room/${props.roomId}`, props);
        setIsLoaded(true);
        setRoom(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { editRoom, isLoaded, room, isError, error };
};
