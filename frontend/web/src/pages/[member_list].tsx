import { Box, Divider, Heading, Text, useDisclosure } from "@chakra-ui/react";

import { Summary } from "@/components/organisms/Summary";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { TabsAllMemberOrSmallRooms } from "@/components/organisms/TabsAllMemberOrSmallRooms";
import { ModalAddSmallRoom } from "@/components/molecules/modal/ModalAddSmallRoom";
import { useState } from "react";
import { ModalAddMenber } from "@/components/molecules/modal/ModalAddMenber";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isModalAddMenberOpen, setIsModalAddMenber] = useState(false);

  const onModalAddMenberOpen = () => setIsModalAddMenber(true);
  const onModalAddMenberClose = () => setIsModalAddMenber(false);

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
          <MembersAmount p="2" bg="orange.300" fontSize="md" />
        </Box>
      </Box>
      <TabsAllMemberOrSmallRooms />
    </>
  );
}
