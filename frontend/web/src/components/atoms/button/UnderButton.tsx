import { FC, useEffect } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  onClick?: () => void;
  height?: string;
  width?: string;
  color: string;
  title: string;
  isDisabled?: boolean;
};

export const UnderButton: FC<Props> = (props) => {
  const { onClick, height = "100", width = "50", color, title, isDisabled } = props;

  return (
    <Button
      h={`${height}%`}
      w={`${width}%`}
      bg={`${color}.400`}
      isDisabled={isDisabled}
      color="white"
      rounded=""
      _hover={{ bg: `${color}.500` }}
      _active={{ bg: `${color}.600` }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
