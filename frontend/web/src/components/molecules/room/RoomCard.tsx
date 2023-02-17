import { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { MembersAmount } from "@/components/organisms/MembersAmount";

type Props = {
  roomName: string;
  lastUpdate: string;
  memberAmount: number;
};

export const RoomCard: FC<Props> = (props) => {
  const { roomName, lastUpdate, memberAmount } = props;

  return (
    <Box as="button">
      <MembersAmount
        p="1"
        bg="orange.300"
        fontSize="sm"
        memberAmount={memberAmount}
      />
      <Box mt={4} mb={2}>
        <Heading size="md">{roomName}</Heading>
      </Box>
      <Box>
        <Text
          textAlign="right"
          fontSize="sm"
          textColor="gray.500"
        >{`更新日時 : ${lastUpdate}`}</Text>
      </Box>
    </Box>
  );
};
