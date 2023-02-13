import { FC } from "react";
import { Divider, HStack } from "@chakra-ui/react";

import { UnderButton } from "../atoms/button/UnderButton";

export const FixedBottomButtons: FC = () => {
  return (
    <HStack
      height="70px"
      w="100%"
      spacing={0}
      position="fixed"
      zIndex={1}
      bottom="0%"
    >
      <UnderButton color="orange" title="参加者を追加する" />
      <Divider orientation="vertical" borderColor="white" />
      <UnderButton color="teal" title="小部屋を追加する" />
    </HStack>
  );
};
