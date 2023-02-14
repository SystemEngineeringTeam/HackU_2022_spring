import { FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, useDisclosure } from "@chakra-ui/react";

import { MenuDrawer } from "@/components/molecules/drawer/MenuDrawer";

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        bg="teal.400"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 1, md: 5 }}
      >
        <Flex align="center" as="a" ml={2} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            人数管理する蔵（仮）
          </Heading>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          size="lg"
          variant="unstyled"
          onClick={onOpen}
          display={{ base: "black", md: "none" }}
          aria-label="メニューボタン"
        />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
