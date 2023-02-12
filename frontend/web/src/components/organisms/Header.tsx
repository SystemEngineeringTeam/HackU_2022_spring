import { FC, memo, useCallback } from "react";
import { Flex, Box, Heading, Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../atoms/button/MenuIconButton"; 
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            // onClick={onClickHome}
          >
            人数管理する蔵（仮）
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            {/* <Link onClick={onClickUserManagement}>ユーザ一覧</Link> */}
          </Box>

          {/* <Link onClick={onClickSetting}>設定</Link> */}
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      {/* <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      /> */}
    </>
  );
};
