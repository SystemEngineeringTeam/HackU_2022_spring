import { FC } from "react";
import { HStack, Box, Text } from "@chakra-ui/react";

type Props = {
  p: string;
  bg: string;
  fontSize: string;
  memberAmount: number;
};

export const MembersAmount: FC<Props> = (props) => {
  const { p, bg, fontSize, memberAmount } = props;

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
          {memberAmount}人
        </Text>
      </Box>
    </HStack>
  );
};
