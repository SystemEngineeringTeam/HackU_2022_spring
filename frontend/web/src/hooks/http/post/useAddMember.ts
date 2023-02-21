import { Member } from "@/types/member";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomId: number;
  name: string;
  comment?: string;
  tag?: string;
};

export const useAddMember = () => {
  const [member, setMember] = useState<undefined | Member[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const addMember = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.post<Member[]>(`/api/room/${props.roomId}/member`, {
          name: props.name,
          comment: props.comment,
          tag: props.tag
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

  return { addMember, isLoaded, member, isError, error };
};
