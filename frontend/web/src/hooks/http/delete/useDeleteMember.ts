import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomId: number;
  userId: number;
};

export const useDeleteMember = () => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const deleteMember = useCallback(
    async (props: Props) => {
      setIsDeleted(false);
      setIsError(false);

      try {
        const response = await axios.delete(`/api/room/${props.roomId}/member/${props.userId}`);
        setIsDeleted(true);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { deleteMember, isDeleted, isError, error };
};
