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
import { Member } from "@/types/member";
import { useGetRoom } from "@/hooks/http/get/useFetchRoom";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  member: Member;
};

export const ModalDeleteMember: FC<Props> = (props) => {
  const { onClose, isOpen } = props;
  const { deleteMember } = useDeleteMember();
  const { fetchRoom } = useGetRoom();
  const room = useRecoilValue(roomState);

  const onClickYes = useCallback(
    () => {
      const deleteProps = {
        memberId: props.member.memberId
      };
      deleteMember(deleteProps)
        .then(() => {
          onClose();
          fetchRoom({ roomId: room.roomId });
        });
    }
    , [deleteMember, props.member.memberId, onClose, fetchRoom, room.roomId]
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
              <Button onClick={onClose}>いいえ</Button>
              <Button
                color="white"
                backgroundColor="orange.400"
                onClick={onClickYes}
              >
                はい
              </Button>
            </HStack>
          </Center>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
