import { roomListState } from "@/store/roomListState";
import { Room } from "@/types/room";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";

type Props = {
  roomIds: number[];
};

export const useGetRoomList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [roomList, setRoomList] = useRecoilState(roomListState);

  const getRoomList = useCallback(
    async (props: Props) => {
      setIsLoading(true);
      setIsError(false);
      setError(undefined);

      try {
        const response = await axios.get<Room[]>('/api/room', {
          params: {
            roomIds: String(props.roomIds)
          }
        });
        setRoomList(response.data);
      } catch (e) {
        if (e instanceof Error) {
          setIsError(true);
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    }, [setRoomList]
  );

  return { getRoomList, roomList, isLoading, isError, error };
};
