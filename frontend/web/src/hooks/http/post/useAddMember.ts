import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomId: string;
  name: string;
  comment: string;
};

export const useAddMember = () => {
  const [room, setRoom] = useState<undefined | Room[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const addMember = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.post<Room[]>(`/api/room/${props.roomId}/member`, {
          name: props.name,
          comment: props.comment
        });
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

  return { addMember, isLoaded, room, isError, error };
};
