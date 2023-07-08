import { useCallback, useState } from "react";
import axios from "axios";

import { Member } from "@/types/member";

type Props = {
  memberId: number;
  name: string;
  comment: string;
  tag: string;
};

export const useEditMember = () => {
  const [member, setMember] = useState<undefined | Member[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const editMember = useCallback(async (props: Props) => {
    setIsLoaded(false);
    setIsError(false);

    try {
      const response = await axios.put<Member[]>(
        `/api/room/member/${props.memberId}`,
        {
          name: props.name,
          comment: props.comment,
          tag: props.tag
        }
      );
      setIsLoaded(true);
      setMember(response.data);
    } catch (e) {
      if (e instanceof Error) {
        setIsError(true);
        setError(e);
      }
    }
  }, []);

  return { editMember, isLoaded, member, isError, error };
};
