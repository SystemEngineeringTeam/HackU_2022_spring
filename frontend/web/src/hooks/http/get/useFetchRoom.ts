import { roomState } from "@/store/roomState";
import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";

type Props = {
  roomId: number;
};

export const useGetRoom = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [room, setRoom] = useRecoilState(roomState);

  const getRoom = useCallback(
    async (props: Props) => {
      setIsLoading(true);
      setIsError(false);
      setError(undefined);

      try {
        const response = await axios.get<Room[]>('/api/room', {
          params: {
            roomIds: String(props.roomId)
          }
        });
        setRoom(response.data[0]);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    }, [setRoom]
  );

  return { getRoom, room, isLoading, isError, error };
};
