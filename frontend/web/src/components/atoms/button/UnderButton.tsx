import { FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  height?: string;
  width?: string;
  color: string;
  title: string;
  onClick?: () => void;
};

export const UnderButton: FC<Props> = (props) => {
  const { height = "100", width = "50", color, title, onClick } = props;

  return (
    <Button
      h={`${height}%`}
      w={`${width}%`}
      bg={`${color}.400`}
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
