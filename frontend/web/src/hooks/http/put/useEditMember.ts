import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomId: string;
  memberId: string;
  name: string;
  comment: string;
};

export const useEditMember = () => {
  const [room, setRoom] = useState<undefined | Room[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const editMember = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.put<Room[]>(`/api/room/${props.roomId}/member/${props.memberId}`, {
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

  return { editMember, isLoaded, room, isError, error };
};
