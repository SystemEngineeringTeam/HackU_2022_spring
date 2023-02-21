import { FC, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
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

import { roomState } from "@/store/roomState";
import { useEditMember } from "@/hooks/http/put/useEditMember";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  memberId: number;
};

export const ModalMoveMember: FC<Props> = (props) => {
  const { onClose, isOpen, memberId } = props;

  const { editMember, isLoaded, member, isError, error } = useEditMember();

  const room = useRecoilValue(roomState);

  const tags = room.members
    .map((ele) => ele.tag)
    .filter((elem, index, self) => self.indexOf(elem) === index);

  const onChangeTag = (e: ChangeEvent<HTMLSelectElement>) => {
    room.members.map((member) => {
      if (member.memberId === memberId) {
        editMember({
          memberId: member.memberId,
          name: member.name,
          comment: member.comment,
          tag: e.target.value,
        });
      }
    });
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalHeader>どの部屋に移動させますか？</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select placeholder="移動先の部屋を選択" onChange={onChangeTag}>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Center>
            <HStack spacing={4}>
              <Button
                color="white"
                backgroundColor="orange.400"
                _hover={{ bg: "orange.500" }}
                _active={{ bg: "orange.600" }}
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
