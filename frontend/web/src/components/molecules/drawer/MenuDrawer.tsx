import { FC } from "react";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: FC<Props> = (props) => {
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justify="space-between">
              <Box>メニュー</Box>
              <IconButton
                as={SmallCloseIcon}
                variant="unstyled"
                size="sm"
                bg="white"
                aria-label="Delete Icon"
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody p={0} bg="gray.100">
            <Link href="/room_list">
              <Button w="100%">閲覧したことのあるイベント</Button>
            </Link>
            <Link href="/room_building">
              <Button w="100%">新しいイベントを作成</Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
