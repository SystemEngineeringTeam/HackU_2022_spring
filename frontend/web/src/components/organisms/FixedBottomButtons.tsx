import { FC } from "react";
import { Divider, HStack } from "@chakra-ui/react";

import { UnderButton } from "../atoms/button/UnderButton";

type Props = {
  leftButtonTitle: string;
  rightButtonTitle?: string;
  leftButtonOnClick?: () => void;
  rightButtonOnClick?: () => void;
};

export const FixedBottomButtons: FC<Props> = (props) => {
  const {
    leftButtonTitle,
    rightButtonTitle,
    leftButtonOnClick,
    rightButtonOnClick,
  } = props;

  return (
    <HStack
      height="70px"
      w="100%"
      spacing={0}
      position="fixed"
      zIndex={1}
      bottom="0%"
    >
      {rightButtonTitle === undefined ? (
        <>
          <UnderButton
            width="100"
            color="orange"
            title={leftButtonTitle}
            onClick={leftButtonOnClick}
          />
        </>
      ) : (
        <>
          <UnderButton
            color="orange"
            title={leftButtonTitle}
            onClick={leftButtonOnClick}
          />
          <Divider orientation="vertical" borderColor="white" />
          <UnderButton
            color="teal"
            title={rightButtonTitle}
            onClick={rightButtonOnClick}
          />
        </>
      )}
    </HStack>
  );
};
