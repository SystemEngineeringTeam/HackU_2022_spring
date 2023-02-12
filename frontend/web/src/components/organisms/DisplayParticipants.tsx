import { HStack, Box, Text } from "@chakra-ui/react";

export const DisplayParticipants = () => {
  return (
    <HStack>
      <Box>
        <Text
          as="mark"
          color="white"
          backgroundColor="orange.300"
          p={2}
          fontSize="md"
          fontWeight="bold"
        >
          参加人数
        </Text>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" whiteSpace="unset">
          14人
        </Text>
      </Box>
    </HStack>
  );
};
