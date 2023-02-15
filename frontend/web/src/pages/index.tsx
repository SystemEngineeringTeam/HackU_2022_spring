import { Box, Divider, Heading, Text } from "@chakra-ui/react";

import { Summary } from "@/components/organisms/Summary";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { TabsAllMemberOrSmallRooms } from "@/components/organisms/TabsAllMemberOrSmallRooms";

export default function Home() {
  return (
    <>
      <FixedBottomButtons
        leftButtonTitle="参加者を追加する"
        rightButtonTitle="小部屋を追加する"
      />
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
          部屋のタイトル
        </Text>
      </Box>
      <Divider borderColor="gray.400" />
      <Summary />
      <Divider borderColor="gray.400" />
      <Box p={4}>
        <Heading size="md">参加者一覧</Heading>
        <Box pt={4}>
          <MembersAmount p="2" bg="orange.300" fontSize="md" />
        </Box>
      </Box>
      <TabsAllMemberOrSmallRooms />
    </>
  );
}
