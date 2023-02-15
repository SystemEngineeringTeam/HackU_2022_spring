import { Member } from "@/types/member";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomId: string;
  memberId: string;
  name: string;
  comment: string;
};

export const useEditMember = () => {
  const [member, setMember] = useState<undefined | Member[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const editMember = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.put<Member[]>(`/api/room/${props.roomId}/member/${props.memberId}`, {
          name: props.name,
          comment: props.comment
        });
        setIsLoaded(true);
        setMember(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { editMember, isLoaded, member, isError, error };
};
