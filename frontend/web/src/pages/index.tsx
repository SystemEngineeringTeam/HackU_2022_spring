import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Flex,
  Text,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { members } from "../sample/member";
import { EditSummary } from "../components/molecules/EditSummary";
import { MemberCard } from "@/components/atoms/member/memberCard";
import { DisplaySummary } from "../components/molecules/DisplaySummary";
import { DisplayParticipants } from "../components/organisms/DisplayParticipants";

export default function Home() {
  const [isEditSummary, setIsEditSummary] = useState(false);

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
      <Flex justify="space-between">
        {isEditSummary ? (
          <EditSummary
            isEditSummary={isEditSummary}
            setIsEditSummary={setIsEditSummary}
          />
        ) : (
          <>
            <DisplaySummary
              isEditSummary={isEditSummary}
              setIsEditSummary={setIsEditSummary}
            />
          </>
        )}
      </Flex>
      <Divider borderColor="gray.400" />

      <Box p={4}>
        <DisplayParticipants />
      </Box>

      <Card>
        <CardHeader>
          <Heading size="md">参加者一覧</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {members.map((member) => (
              <MemberCard
                key={member.memberId}
                name={member.name}
                registrationDate={member.registrationDate}
                comment={member.comment}
              />
            ))}
            {/* <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box> */}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
