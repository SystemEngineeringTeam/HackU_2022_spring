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
import { Member } from "@/types/member";

const UNSET_KEY = 'タグ未設定';

export const AccordionMembers: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { members, tags } = useRecoilValue(roomState);
  const grouped = groupByTag(members, tags);

  return (
    <>
      <Button w="100%" onClick={onOpen} color="gray.400">
        <AddIcon color="gray.400" />
        新しくタグを作る
      </Button>
      <ModalAddTag isOpen={isOpen} onClose={onClose} />
      <Accordion allowMultiple defaultIndex={[0]}>
        {grouped.map(([tag, members]) => (
          <AccordionItem key={tag}>
            <h2>
              <AccordionButton p={4}>
                <Box as="span" flex="1" textAlign="left">
                  {`${tag}（${members.length}）`}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={4}>
                {members.map(m => (
                  <React.Fragment key={m.memberId}>
                    <MemberCard member={m} />
                    <Divider />
                  </React.Fragment>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

const groupByTag = (members: Member[], tags: string[]) => {
  const grouped = new Map<string, Member[]>(tags.map(v=> [v, []]));
  grouped.set(UNSET_KEY, []);
  for (const m of members) {
    const target = grouped.get(m.tag) ?? grouped.get(UNSET_KEY)!;
    target.push(m);
  }
  return Array.from(grouped);
};
