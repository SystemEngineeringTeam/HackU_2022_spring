import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Box, Center, Text } from "@chakra-ui/react";

import { roomListState } from "@/store/roomListState";
import { AllRooms } from "@/components/organisms/AllRooms";
import { useGetRooms } from "@/hooks/http/get/useFetchRooms";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";

export default function RoomList() {
  const router = useRouter();

  const onClickPushRoomBuilding = () => router.push("/room_building");
  const { fetchRooms, rooms } = useGetRooms();
  const [roomList, setRoomList] = useRecoilState(roomListState);

  useEffect(() => {
    const viewHistory = (localStorage.getItem("viewHistory") ?? "")
      .split(",")
      .map(Number);
    if (viewHistory.length > 0) fetchRooms({ roomIds: viewHistory });
  }, [fetchRooms]);

  useEffect(() => {
    if (rooms == null) return;
    setRoomList(rooms);
  }, [rooms, setRoomList]);

  return (
    <>
      <FixedBottomButtons
        leftButtonTitle="新しく部屋を作る"
        leftButtonOnClick={onClickPushRoomBuilding}
      />
      <Box p={4}>
        <Center>
          <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
            最近閲覧した部屋
          </Text>
        </Center>
      </Box>
      <AllRooms />
    </>
  );
}
