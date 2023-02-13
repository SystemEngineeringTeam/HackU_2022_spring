import { useRecoilValue } from "recoil";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { MemberCard } from "../atoms/member/MemberCard";
import { roomDetailsState } from "../../store/roomDetailsState";

export const AllMembers = () => {
  const roomDetaills = useRecoilValue(roomDetailsState);

  return (
    <Card>
      <CardHeader>
        <Heading size="md">参加者一覧</Heading>
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
