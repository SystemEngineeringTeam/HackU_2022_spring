import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { MenuDrawer } from "@/components/molecules/drawer/MenuDrawer";


export const Header: FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHome = useCallback(() => router.push("/"), [router]);
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
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: "md", md: "lg" }}
              onClick={onClickHome}
            >
              人数管理する蔵（仮）
            </Heading>
          </Box>
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
