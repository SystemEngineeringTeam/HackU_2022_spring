import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Card, CardBody, Center, Stack, StackDivider } from "@chakra-ui/react";

import { RoomCard } from "../molecules/room/RoomCard";
import { roomListState } from "@/store/roomListState";

export const AllRooms: FC = () => {
  const roomList = useRecoilValue(roomListState);
  if (roomList.length === 0) return (
    <Center>
      最近閲覧した部屋はありません！<br />
      QRコードやURLで部屋を共有してもらったり、自分で部屋を作ってみましょう！
    </Center>
  );

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {roomList.map((room) => (
            <RoomCard key={room.roomId} room={room} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
