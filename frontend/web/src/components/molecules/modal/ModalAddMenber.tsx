import { FC } from "react";
import {
  Box,
  Button,
  Center,
  VStack,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalAddMenber: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalHeader>参加者追加</ModalHeader>
        <ModalCloseButton />

        <ModalBody p={2}>
          <Center h="80">
            <VStack>
              <Box h="80" w="80" bg="gray.200">
                QRコード表示
              </Box>
              <Box>
                <Text>スマホをピッとするかQRコードを読んでください</Text>
              </Box>
            </VStack>
          </Center>
        </ModalBody>
        <ModalFooter>
          <Center>
            <HStack spacing={4}>
              <Button
                type="submit"
                color="white"
                backgroundColor="orange.400"
                _hover={{ bg: "orange.500" }}
                _active={{ bg: "orange.600" }}
              >
                作成
              </Button>

              <Button onClick={onClose}>戻る</Button>
            </HStack>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
