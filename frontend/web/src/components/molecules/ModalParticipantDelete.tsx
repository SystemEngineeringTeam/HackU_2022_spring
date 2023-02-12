import { FC, useCallback } from "react";
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

export const ModalParticipantDelete: FC<Props> = (props) => {
  const { onClose, isOpen } = props;

  const toast = useToast();

//   const onClickDeleteParticipant = useCallback(() => {
//     toast({
//       title: "削除しました",
//       status: "success",
//       isClosable: true,
//     });
//     onClose;
//   }, [toast, onClose]);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        {/* <Center w="100%"> */}
        <ModalHeader>削除しますか？</ModalHeader>
        {/* </Center> */}

        <ModalCloseButton />
        <ModalBody>
          <Center>
            <HStack spacing={4}>
              <Button
                color="white"
                backgroundColor="orange.300"
                onClick={onClose}
              >
                はい
              </Button>
              <Button onClick={onClose}>いいえ</Button>
            </HStack>
          </Center>
        </ModalBody>
        <ModalFooter>
          {/* <Button onClick={onClose}>Close</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
