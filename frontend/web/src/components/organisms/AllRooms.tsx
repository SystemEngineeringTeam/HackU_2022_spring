import { useRecoilValue } from "recoil";
import { Card, CardBody, Stack, StackDivider } from "@chakra-ui/react";

import { rooms } from "@/sample/rooms";
import { RoomCard } from "../molecules/room/RoomCard";
import { roomDetailsState } from "@/store/roomDetailsState";

export const AllRooms = () => {
  const roomDetaills = useRecoilValue(roomDetailsState);

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {rooms.map((room) => (
            <RoomCard
              key={room.roomId}
              roomName={room.roomName}
              lastUpdate={room.lastUpdate}
              memberAmount={room.memberAmount}
            />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
