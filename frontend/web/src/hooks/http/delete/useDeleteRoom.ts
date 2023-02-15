import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomId: string;
};

export const useDeleteRoom = () => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const deleteRoom = useCallback(
    async (props: Props) => {
      setIsDeleted(false);
      setIsError(false);

      try {
        const response = await axios.delete(`/api/room/${props.roomId}`);
        setIsDeleted(true);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { deleteRoom, isDeleted, isError, error };
};
