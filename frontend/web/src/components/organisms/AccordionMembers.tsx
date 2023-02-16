import { useRecoilValue } from "recoil";
import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Stack,
  Divider,
} from "@chakra-ui/react";

import { roomState } from "@/store/roomDetailsState";
import { MemberCard } from "../molecules/member/MemberCard";
import React from "react";

export const AccordionMembers = () => {
  const room = useRecoilValue(roomState);

  const tags = room.members
    .map((ele) => ele.tag)
    .filter((elem, index, self) => self.indexOf(elem) === index);

  return (
    <Accordion allowMultiple>
      {tags.map((tag) => (
        <AccordionItem key={tag}>
          <h2>
            <AccordionButton p={4}>
              <Box as="span" flex="1" textAlign="left">
                {tag}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={4}>
              {room.members.map(
                (member) =>
                  member.tag === tag && (
                    <React.Fragment  key={member.memberId}>
                      <MemberCard
                        name={member.name}
                        comment={member.comment}
                      />
                      <Divider />
                    </React.Fragment>
                  )
              )}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
