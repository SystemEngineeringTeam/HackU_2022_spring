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
import { MembersAmount } from "./MembersAmount";

export const AllMembers = () => {
  const roomDetaills = useRecoilValue(roomDetailsState);

  return (
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
  );
};
