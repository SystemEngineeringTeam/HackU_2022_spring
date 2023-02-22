import React, { FC } from "react";
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

import { roomState } from "@/store/roomState";
import { MemberCard } from "../molecules/member/MemberCard";

export const AccordionMembers: FC = () => {
  const room = useRecoilValue(roomState);
  const grouped = groupBy(room.members, m => m.tag);

  return (
    <Accordion allowMultiple defaultIndex={0}>
      {grouped.map(([tag, members]) => (
        <AccordionItem key={tag}>
          <h2>
            <AccordionButton p={4}>
              <Box as="span" flex="1" textAlign="left">
                {tag || "タグ未設定"}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={4}>
              {members.map(
                m => (
                  <React.Fragment key={m.memberId}>
                    <MemberCard member={m} />
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

const groupBy = <K, V>(
  array: readonly V[],
  getKey: (cur: V, idx: number, src: readonly V[]) => K
): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur, idx, src) => {
      const key = getKey(cur, idx, src);
      const list = map.get(key);
      if (list) list.push(cur);
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>())
);
