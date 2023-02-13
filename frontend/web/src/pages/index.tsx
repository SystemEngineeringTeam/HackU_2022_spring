import { Box, Divider, Text } from "@chakra-ui/react";

import { Summary } from "@/components/organisms/Summary";
import { MembersAmount } from "../components/organisms/MembersAmount";
import { AllMembers } from "@/components/organisms/AllMembers";

export default function Home() {
  return (
    <>
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
          部屋のタイトル
        </Text>
      </Box>
      {/* <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0"></FormLabel>
            <Switch size="md" />
          </FormControl>
        </Box> */}
      <Divider borderColor="gray.400" />
      <Summary />
      <Divider borderColor="gray.400" />
      <Box p={4}>
        <MembersAmount />
      </Box>
      <AllMembers />
    </>
  );
}
