import { FC, useState, ChangeEvent } from "react";
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
  Select,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const ModalMoveMember: FC<Props> = (props) => {
  const { onClose, isOpen } = props;

  const [nextRoom, setNextRoom] = useState("");

  const onChangeNextRoom = (e: ChangeEvent<HTMLSelectElement>) =>
    setNextRoom(e.target.value);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalHeader>どの部屋に移動させますか？</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select
            value={nextRoom}
            placeholder="移動先の部屋を選択"
            onChange={onChangeNextRoom}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Center>
            <HStack spacing={4}>
              <Button
                color="white"
                backgroundColor="orange.400"
                onClick={onClose}
              >
                決定
              </Button>
              <Button onClick={onClose}>戻る</Button>
            </HStack>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
