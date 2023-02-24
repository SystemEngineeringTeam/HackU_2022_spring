import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

export const Header: FC = () => {
  const router = useRouter();

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
        height={"2.5em"}
      >
        <Flex align="center" as="a" ml={2} _hover={{ cursor: "pointer" }}>
          <Box>
            <Heading
              as="button"
              fontSize={{ base: "md", md: "lg" }}
              onClick={onClickHome}
            >
              人数管理する蔵（仮）
            </Heading>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
