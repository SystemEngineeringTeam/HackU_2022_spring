import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { roomState } from "@/store/roomDetailsState";
import { Summary } from "@/components/organisms/Summary";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { ModalAddMenber } from "@/components/molecules/modal/ModalAddMenber";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { ModalAddSmallRoom } from "@/components/molecules/modal/ModalAddSmallRoom";
import { TabsAllMemberOrSmallRooms } from "@/components/organisms/TabsAllMemberOrSmallRooms";
import { NameAndCommentFormDrawer } from "@/components/molecules/drawer/NameAndCommentFormDrawer";
import { useGetRooms } from "@/hooks/http/get/useFetchRooms";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isModalAddMenberOpen, setIsModalAddMenber] = useState(false);
  const [isDrawerMenberFormOpen, setIsDrawerMenberFormOpen] = useState(false);

  const [room, setRoom] = useRecoilState(roomState);

  const onModalAddMenberOpen = () => setIsModalAddMenber(true);
  const onModalAddMenberClose = () => setIsModalAddMenber(false);

  const onDrawerMenberFormOpen = () => setIsDrawerMenberFormOpen(true);
  const onDrawerMenberFormClose = () => setIsDrawerMenberFormOpen(false);

  const { fetchRooms, rooms: fetched } = useGetRooms();

  useEffect(() => {
    const roomId = router.query.roomId;
    if (typeof roomId !== 'string' || !/\d+/.test(roomId)) return;
    fetchRooms({ roomIds: [Number(roomId)] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.roomId]);

  useEffect(() => {
    if (fetched === undefined) return;
    setRoom(fetched[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);

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
        <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
          {room.roomName}
        </Text>
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
