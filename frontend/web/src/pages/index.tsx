import { Box, Divider, Text } from "@chakra-ui/react";

import { Summary } from "@/components/organisms/Summary";
import { AllMembers } from "@/components/organisms/AllMembers";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";

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
      <AllMembers />
    </>
  );
}
