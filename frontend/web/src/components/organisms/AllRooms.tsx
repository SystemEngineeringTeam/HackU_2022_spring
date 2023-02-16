import { useRecoilValue } from "recoil";
import { Card, CardBody, Stack, StackDivider } from "@chakra-ui/react";

import { useDate } from "@/hooks/date/useDate";
import { RoomCard } from "../molecules/room/RoomCard";
import { roomsState } from "@/store/roomDetailsState";

export const AllRooms = () => {
  const rooms = useRecoilValue(roomsState);

  const { formatDate } = useDate();

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {rooms.map((room) => (
            <RoomCard
              key={room.roomId}
              roomName={room.roomName}
              lastUpdate={formatDate({ lastUpdated: room.lastUpdated })}
              memberAmount={room.memberAmount}
            />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
