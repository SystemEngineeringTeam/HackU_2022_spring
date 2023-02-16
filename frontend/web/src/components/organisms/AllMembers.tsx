import { useRecoilValue } from "recoil";
import { Stack, StackDivider } from "@chakra-ui/react";

import { roomsState } from "@/store/roomDetailsState";
import { MemberCard } from "../molecules/member/MemberCard";

export const AllMembers = () => {
  const rooms = useRecoilValue(roomsState);

  return (
    <Stack divider={<StackDivider />} spacing={4}>
      {rooms[0].members.map((member) => (
        <MemberCard
          key={member.memberId}
          name={member.name}
          comment={member.comment}
        />
      ))}
    </Stack>
  );
};
