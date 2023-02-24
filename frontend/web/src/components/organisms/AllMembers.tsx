import { useRecoilValue } from "recoil";
import { Stack, StackDivider } from "@chakra-ui/react";

import { roomState } from "@/store/roomState";
import { MemberCard } from "../molecules/member/MemberCard";

export const AllMembers = () => {
  const room = useRecoilValue(roomState);

  return (
    <Stack divider={<StackDivider />} spacing={4}>
      {room.members.map((member) => (
        <MemberCard
          key={member.memberId}
          member={member}
        />
      ))}
    </Stack>
  );
};
