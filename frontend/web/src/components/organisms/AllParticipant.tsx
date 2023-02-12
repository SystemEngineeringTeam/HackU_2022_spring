import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { members } from "@/sample/member";
import { MemberCard } from "../atoms/member/memberCard";

export const AllParticipant = () => {
  return (
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
        </Stack>
      </CardBody>
    </Card>
  );
};
