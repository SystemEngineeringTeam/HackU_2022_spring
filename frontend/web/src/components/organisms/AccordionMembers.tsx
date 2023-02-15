import { useRecoilValue } from "recoil";
import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

import { roomsState } from "@/store/roomDetailsState";
import { MemberCard } from "../molecules/member/MemberCard";

export const AccordionMembers = () => {
  const rooms = useRecoilValue(roomsState);

  const tags = rooms[0].members
    .map((ele) => ele.tag)
    .filter((elem, index, self) => self.indexOf(elem) === index);

    console.log(tags)
  return (
    <Accordion  allowMultiple>
      <AccordionItem>
        {tags.map((tag) => (
          <>
            <h2>
              <AccordionButton key={tag}>
                <Box as="span" flex="1" textAlign="left">
                  {tag}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <Stack divider={<StackDivider />} spacing={4}>
              {rooms[0].members.map((member) =>
                member.tag === tag && (
                  <AccordionPanel key={member.memberId} pb={4}>
                    <MemberCard name={member.name} comment={member.comment} />
                  </AccordionPanel>
                )  
              )}
            </Stack>
          </>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
