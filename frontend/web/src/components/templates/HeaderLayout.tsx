import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Header } from "../organisms/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Box h="70px" bg="white"></Box>
    </>
  );
};
