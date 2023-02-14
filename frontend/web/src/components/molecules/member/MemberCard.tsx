import { FC } from "react";
import { DeleteIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text, Flex, Center } from "@chakra-ui/react";

import { IconButtonWithText } from "@/components/atoms/button/IconButtonWithText";

type Props = {
  name: string;
  registrationDate: string;
  comment: string;
};

export const MemberCard: FC<Props> = (props) => {
  const { name, registrationDate, comment } = props;

  return (
    <Flex justify="space-between">
      <Box>
        <Heading size="xs" textTransform="uppercase">
          {name}
        </Heading>
        <Text pt="2" fontSize="sm">
          {comment}
        </Text>
      </Box>
      <Center>
        <HStack>
          <IconButtonWithText iconButton={UpDownIcon} iconLabel="移動" />
          <IconButtonWithText iconButton={DeleteIcon} iconLabel="削除" />
        </HStack>
      </Center>
    </Flex>
  );
};
