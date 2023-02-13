import { FC } from "react";
import {
  Button,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const ModalDeleteMember: FC<Props> = (props) => {
  const { onClose, isOpen } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalHeader>削除しますか？</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <HStack spacing={4}>
              <Button
                color="white"
                backgroundColor="orange.400"
                onClick={onClose}
              >
                はい
              </Button>
              <Button onClick={onClose}>いいえ</Button>
            </HStack>
          </Center>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
