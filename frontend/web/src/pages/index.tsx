import {
  Box,
  Card,
  CardHeader,
  Divider,
  Text,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { members } from "../sample/member";
import { Summary } from "@/components/organisms/Summary";
import { MemberCard } from "@/components/atoms/member/memberCard";
import { ParticipantsAmount } from "../components/organisms/ParticipantsAmount";
import { AllParticipant } from "@/components/organisms/AllParticipant";

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
        <ParticipantsAmount />
      </Box>

      <AllParticipant />
    </>
  );
}
