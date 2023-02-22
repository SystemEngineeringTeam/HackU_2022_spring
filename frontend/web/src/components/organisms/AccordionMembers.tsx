import React, { FC } from "react";
import { useRecoilValue } from "recoil";
import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Stack,
  Divider,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { roomState } from "@/store/roomState";
import { MemberCard } from "../molecules/member/MemberCard";
import { ModalAddTag } from "../molecules/modal/ModalAddTag";

export const AccordionMembers: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const room = useRecoilValue(roomState);

  const tags = room.members
    .map((ele) => ele.tag)
    .filter((elem, index, self) => self.indexOf(elem) === index);

  return (
    <>
      <Button w="100%" onClick={onOpen} color="gray.400">
        <AddIcon color="gray.400" />
        　新しくタグを作る
      </Button>
      <ModalAddTag isOpen={isOpen} onClose={onClose} />
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
                      <React.Fragment key={member.memberId}>
                        <MemberCard
                          name={member.name}
                          comment={member.comment}
                          member={member}
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
    </>
  );
};
