import { FC } from "react";
import { Divider, HStack } from "@chakra-ui/react";

import { UnderButton } from "../atoms/button/UnderButton";

type Props = {
  leftButtonTitle: string;
  rightButtonTitle: string;
};

export const FixedBottomButtons: FC<Props> = (props) => {
  const { leftButtonTitle, rightButtonTitle } = props;

  return (
    <HStack
      height="70px"
      w="100%"
      spacing={0}
      position="fixed"
      zIndex={1}
      bottom="0%"
    >
      <UnderButton color="orange" title={leftButtonTitle} />
      <Divider orientation="vertical" borderColor="white" />
      <UnderButton color="teal" title={rightButtonTitle} />
    </HStack>
  );
};
