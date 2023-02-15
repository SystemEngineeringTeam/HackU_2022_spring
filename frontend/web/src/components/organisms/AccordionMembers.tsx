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

import { roomsState } from "@/store/roomDetailsState";
import { MemberCard } from "../molecules/member/MemberCard";

export const AccordionMembers = () => {
  const rooms = useRecoilValue(roomsState);

  const tags = rooms[0].members
    .map((ele) => ele.tag)
    .filter((elem, index, self) => self.indexOf(elem) === index);

  console.log(tags);
  return (
    <Accordion allowMultiple>
      {tags.map((tag) => (
        <>
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
                {rooms[0].members.map(
                  (member) =>
                    member.tag === tag && (
                      <>
                        <MemberCard
                          key={member.memberId}
                          name={member.name}
                          comment={member.comment}
                        />
                        <Divider />
                      </>
                    )
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </>
      ))}
    </Accordion>
  );
};
