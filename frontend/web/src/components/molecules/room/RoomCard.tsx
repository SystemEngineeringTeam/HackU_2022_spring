import { FC } from "react";
import { Box, Heading, HStack, Text, Center } from "@chakra-ui/react";

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
      <HStack>
        <MembersAmount p="1" bg="orange.300" fontSize="sm" />
      </HStack>
      <Center>
        <Heading size="md" textTransform="uppercase">
          {roomName}
        </Heading>
      </Center>
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
