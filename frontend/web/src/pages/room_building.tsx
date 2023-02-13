import { Box, Center, Divider, Text } from "@chakra-ui/react";

import { Summary } from "@/components/organisms/Summary";
import { AllMembers } from "@/components/organisms/AllMembers";
import { MembersAmount } from "../components/organisms/MembersAmount";
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
    </>
  );
}
