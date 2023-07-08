import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";

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
          <HStack onClick={onClickHome}>
            <Image src="/images/ET_GAP.png" width={32} height={32} alt="ET_GAP" />
            <Box>
              <Heading
                as="button"
                fontSize={{ base: "md", md: "lg" }}
              >
                ET GAP
              </Heading>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
