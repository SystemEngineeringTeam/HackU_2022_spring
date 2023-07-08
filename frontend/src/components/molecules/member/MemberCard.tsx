import { FC } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text, Flex, Center } from "@chakra-ui/react";

import { IconButtonWithText } from "@/components/atoms/button/IconButtonWithText";
import { Member } from "@/types/member";

type Props = {
  member: Member;
};

export const MemberCard: FC<Props> = (props) => {
  const { member } = props;

  return (
    <Flex justify="space-between">
      <Box>
        <Heading size="sm" textTransform="uppercase">
          {member.name}
        </Heading>
        <Text pt="2" fontSize="sm">
          {member.comment}
        </Text>
      </Box>
      <Center>
        <HStack>
          <IconButtonWithText
            iconButton={EditIcon}
            iconLabel="編集"
            member={member}
          />
          <IconButtonWithText
            iconButton={DeleteIcon}
            iconLabel="削除"
            member={member}
          />
        </HStack>
      </Center>
    </Flex>
  );
};
