import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Divider, Heading, Text, useDisclosure } from "@chakra-ui/react";

import { roomsState } from "@/store/roomDetailsState";
import { Summary } from "@/components/organisms/Summary";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { ModalAddMenber } from "@/components/molecules/modal/ModalAddMenber";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { ModalAddSmallRoom } from "@/components/molecules/modal/ModalAddSmallRoom";
import { TabsAllMemberOrSmallRooms } from "@/components/organisms/TabsAllMemberOrSmallRooms";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isModalAddMenberOpen, setIsModalAddMenber] = useState(false);

  const [rooms, setRooms] = useRecoilState(roomsState);

  const onModalAddMenberOpen = () => setIsModalAddMenber(true);
  const onModalAddMenberClose = () => setIsModalAddMenber(false);

  useEffect(() => {
    // GET リクエストを送ってグローバルステイトで管理しているroomsにデータを格納する
    // getSeverSidePropsを使うかUseEffectを使う
  }, []);

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
          部屋のタイトル
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
            memberAmount={rooms[0].memberAmount}
          />
        </Box>
      </Box>
      <TabsAllMemberOrSmallRooms />
    </>
  );
}
