import { FC } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { Box, Heading, Text } from "@chakra-ui/react";

import { Room } from "@/types/room";
import { roomState } from "@/store/roomState";
import { useDate } from "@/hooks/date/useDate";
import { MembersAmount } from "@/components/organisms/MembersAmount";

type Props = {
  room: Room;
};

export const RoomCard: FC<Props> = (props) => {
  const { room } = props;

  const router = useRouter();
  const { formatDate } = useDate();

  const setRoom = useSetRecoilState(roomState);

  const onClickTransitionRoomPage = () => {
    setRoom(room);
    router.push(`/${room.roomId}`);
  };

  return (
    <Box as="button" onClick={onClickTransitionRoomPage}>
      <MembersAmount
        p="1"
        bg="orange.300"
        fontSize="sm"
        memberAmount={room.memberAmount}
      />
      <Box mt={4} mb={2}>
        <Heading size="md">{room.roomName}</Heading>
      </Box>
      <Box>
        <Text
          textAlign="right"
          fontSize="sm"
          textColor="gray.500"
        >{`更新日時 : ${formatDate({ lastUpdate: room.lastUpdate })}`}</Text>
      </Box>
    </Box>
  );
};
