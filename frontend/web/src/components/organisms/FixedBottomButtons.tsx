import { FC } from "react";
import { HStack } from "@chakra-ui/react";

import { UnderButton } from "../atoms/button/UnderButton";

type Props = {
  leftButtonTitle: string;
  leftButtonOnClick?: () => void;
};

export const FixedBottomButtons: FC<Props> = (props) => {
  const { leftButtonTitle, leftButtonOnClick } = props;

  return (
    <HStack
      h="70px"
      w="100%"
      spacing={0}
      position="fixed"
      zIndex={1}
      bottom="0%"
    >
      <UnderButton
        width="100"
        color="orange"
        title={leftButtonTitle}
        onClick={leftButtonOnClick}
      />
    </HStack>
  );
};
