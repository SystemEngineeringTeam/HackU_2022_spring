import { FC } from "react";
import { useRecoilValue } from "recoil";
import { HStack, Box, Text } from "@chakra-ui/react";

import { roomDetailsState } from "@/store/roomDetailsState";

type Props = {
  p: string;
  bg: string;
  fontSize: string;
};

export const MembersAmount: FC<Props> = (props) => {
  const { p, bg, fontSize } = props;

  const roomDetails = useRecoilValue(roomDetailsState);

  return (
    <HStack>
      <Box>
        <Text
          as="mark"
          p={p}
          color="white"
          bg={bg}
          fontSize={fontSize}
          fontWeight="bold"
        >
          参加人数
        </Text>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" whiteSpace="unset">
          {roomDetails.members.length}人
        </Text>
      </Box>
    </HStack>
  );
};
