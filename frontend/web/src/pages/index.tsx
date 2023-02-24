import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Center, Text } from "@chakra-ui/react";

import { AllRooms } from "@/components/organisms/AllRooms";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { useGetRoomList } from "@/hooks/http/get/useFetchRoomList";

export default function RoomList() {
  const router = useRouter();

  const onClickPushRoomBuilding = () => router.push("/room_building");
  const { fetchRoomList } = useGetRoomList();

  useEffect(() => {
    const viewHistory = (localStorage.getItem("viewHistory") ?? "")
      .split(",")
      .map(Number);
    if (viewHistory.length > 0) fetchRoomList({ roomIds: viewHistory });
  }, [fetchRoomList]);

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
