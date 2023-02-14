import { Box, Center, Text } from "@chakra-ui/react";

import { AllRooms } from "@/components/organisms/AllRooms";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";

export default function Home() {
  return (
    <>
      <FixedBottomButtons leftButtonTitle="新しく部屋を作る" />
      <Box p={4}>
        <Center>
          <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
            最近閲覧した部屋
          </Text>
        </Center>
      </Box>
      <AllRooms />
    </>
  );
}
