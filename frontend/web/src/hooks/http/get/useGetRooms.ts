import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
  roomIds: string[];
  deep: number;
};

export const useGetRooms = () => {
  const [allRooms, setAllRooms] = useState<undefined | Room[]>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchAllRooms = useCallback(
    async (props: Props) => {
      setIsLoaded(false);
      setIsError(false);

      try {
        const response = await axios.get<Room[]>('/api/room', {
          params: {
            roomIds: props.roomIds,
            deep: props.deep
          }
        });
        setIsLoaded(true);
        setAllRooms(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      }
    }, []
  );

  return { fetchAllRooms, isLoaded, allRooms, isError, error };
};
