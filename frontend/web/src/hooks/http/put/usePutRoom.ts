import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = Partial<Room> & Pick<Room, 'roomId'>;

export const usePutRoom = () => {
  const [editedRoom, setEditedRoom] = useState<undefined | Room[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const putRoom = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.post<Room[]>(`/api/room/${props.roomId}`, props);
        setIsLoaded(true);
        setEditedRoom(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { putRoom, isLoaded, editedRoom, isError, error };
};
