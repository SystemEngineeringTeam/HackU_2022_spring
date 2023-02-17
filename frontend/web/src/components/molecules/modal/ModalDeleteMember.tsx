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
} from "@chakra-ui/react";
import { useDeleteMember } from "@/hooks/http/delete/useDeleteMember";
import { useRecoilValue } from "recoil";
import { roomState } from "@/store/roomState";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  memberId: number;
};

export const ModalDeleteMember: FC<Props> = (props) => {
  const { onClose, isOpen } = props;
  const { deleteMember } = useDeleteMember();
  const room = useRecoilValue(roomState);
  const onClickYes = useCallback(
    () => {
      const deleteProps = {
        roomId: room.roomId,
        memberId: props.memberId
      };
      deleteMember(deleteProps)
        .then(() => onClose());
    }
    , [deleteMember, room.roomId, props.memberId, onClose]
  );

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
                onClick={onClickYes}
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
