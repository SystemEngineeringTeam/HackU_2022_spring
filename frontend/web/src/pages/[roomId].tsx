import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useDate } from "@/hooks/date/useDate";
import { Summary } from "@/components/organisms/Summary";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { ModalAddMenber } from "@/components/molecules/modal/ModalAddMenber";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { ModalAddSmallRoom } from "@/components/molecules/modal/ModalAddSmallRoom";
import { TabsAllMemberOrSmallRooms } from "@/components/organisms/TabsAllMemberOrSmallRooms";
import { NameAndCommentFormDrawer } from "@/components/molecules/drawer/NameAndCommentFormDrawer";
import { roomState } from "@/store/roomState";
import { useGetRoom } from "@/hooks/http/get/useFetchRoom";

export default function RoomId() {
  const router = useRouter();

  const { formatDate } = useDate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isModalAddMenberOpen, setIsModalAddMenber] = useState(false);
  const [isDrawerMenberFormOpen, setIsDrawerMenberFormOpen] = useState(false);

  const room = useRecoilValue(roomState);

  const onModalAddMenberOpen = () => setIsModalAddMenber(true);
  const onModalAddMenberClose = () => setIsModalAddMenber(false);

  const onDrawerMenberFormOpen = () => setIsDrawerMenberFormOpen(true);
  const onDrawerMenberFormClose = () => setIsDrawerMenberFormOpen(false);
  const { getRoom } = useGetRoom();

  useEffect(() => {
    const roomId = router.query.roomId;
    const isValid = typeof roomId === 'string' && /\d+/.test(roomId);
    if (!isValid) return;

    const strageString = localStorage.getItem('viewHistory');
    const viewHistory = strageString ? strageString.split(',') : [];
    if (viewHistory.includes(roomId)) viewHistory.splice(viewHistory.indexOf(roomId), 1);
    viewHistory.push(roomId);
    localStorage.setItem('viewHistory', String([...viewHistory]));

    getRoom({ roomId: Number(roomId) });
  }, [router.query.roomId, getRoom]);

  return (
    <>
      <FixedBottomButtons
        leftButtonTitle="参加者を追加する"
        rightButtonTitle="小部屋を追加する"
        leftButtonOnClick={onModalAddMenberOpen}
        rightButtonOnClick={onOpen}
      />
      <ModalAddSmallRoom isOpen={isOpen} onClose={onClose} />
      <ModalAddMenber
        isOpen={isModalAddMenberOpen}
        onClose={onModalAddMenberClose}
      />
      <Box p={4}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
            {room.roomName}
          </Text>
        </Box>
        <Box>
          <Text textAlign="right" fontSize="sm" textColor="gray.500">
            {`更新日時 : ${formatDate({ lastUpdate: room.lastUpdate })}`}
          </Text>
        </Box>
      </Box>
      <Divider borderColor="gray.400" />
      <Summary />
      <Divider borderColor="gray.400" />
      <Box p={4}>
        <Heading size="md">参加者一覧</Heading>
        <Box pt={4}>
          <MembersAmount
            p="2"
            bg="orange.300"
            fontSize="md"
            memberAmount={room.memberAmount}
          />
        </Box>
      </Box>
      <TabsAllMemberOrSmallRooms />
      <Center>
        <Button
          type="submit"
          w="100px"
          h="100px"
          rounded="full"
          color="white"
          backgroundColor="orange.400"
          mt={4}
          mb={8}
          _hover={{ bg: "orange.500" }}
          _active={{ bg: "orange.600" }}
          onClick={onDrawerMenberFormOpen}
        >
          参加
          <br />
          入力する
        </Button>
      </Center>
      <NameAndCommentFormDrawer
        isOpen={isDrawerMenberFormOpen}
        onClose={onDrawerMenberFormClose}
      />
    </>
  );
}
