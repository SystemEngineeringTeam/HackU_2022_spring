import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Card, CardBody, Stack, StackDivider } from "@chakra-ui/react";

import { RoomCard } from "../molecules/room/RoomCard";
import { roomListState } from "@/store/roomListState";

export const AllRooms: FC = () => {
  const roomList = useRecoilValue(roomListState);

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
