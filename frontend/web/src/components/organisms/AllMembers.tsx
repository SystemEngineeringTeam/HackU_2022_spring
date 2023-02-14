import { useRecoilValue } from "recoil";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { MemberCard } from "../molecules/member/MemberCard";
import { roomDetailsState } from "@/store/roomDetailsState";
import { MembersAmount } from './MembersAmount';

export const AllMembers = () => {
  const roomDetaills = useRecoilValue(roomDetailsState);

  return (
    <Card>
      <CardHeader>
        <Heading size="md">参加者一覧</Heading>
        <Box pt={4}>
        <MembersAmount p="2" bg="orange.300" fontSize="md" />
      </Box>

      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {roomDetaills.members.map((member) => (
            <MemberCard
              key={member.memberId}
              name={member.name}
              registrationDate={member.registrationDate}
              comment={member.comment}
            />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
