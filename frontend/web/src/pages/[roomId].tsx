import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Text,
} from "@chakra-ui/react";

import { roomState } from "@/store/roomState";
import { useDate } from "@/hooks/date/useDate";
import { Summary } from "@/components/organisms/Summary";
import { useEditRoom } from "@/hooks/http/put/useEditRoom";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { ModalAddMember } from "@/components/molecules/modal/ModalAddMember";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";
import { TabsAllMemberOrSmallRooms } from "@/components/organisms/TabsAllMemberOrSmallRooms";
import { NameAndCommentFormDrawer } from "@/components/molecules/drawer/NameAndCommentFormDrawer";
import { useGetRoom } from "@/hooks/http/get/useFetchRoom";

export default function RoomId() {
  const router = useRouter();

  const { formatDate } = useDate();

  const { fetchRoom } = useGetRoom();
  const { editRoom } = useEditRoom();

  const [isModalAddMemberOpen, setIsModalAddMember] = useState(false);
  const [isDrawerMemberFormOpen, setIsDrawerMemberFormOpen] = useState(false);

  const room = useRecoilValue(roomState);

  const onModalAddMemberOpen = () => setIsModalAddMember(true);
  const onModalAddMemberClose = () => setIsModalAddMember(false);

  const onDrawerMemberFormOpen = () => setIsDrawerMemberFormOpen(true);
  const onDrawerMemberFormClose = () => setIsDrawerMemberFormOpen(false);

  const onChangeIsOpen = (e: ChangeEvent<HTMLInputElement>) => {
    editRoom({ roomId: room.roomId, isOpen: !room.isOpen })
      .then(() => fetchRoom({ roomId: room.roomId }));
  };

  useEffect(() => {
    const roomId = router.query.roomId;
    const isValid = typeof roomId === "string" && /\d+/.test(roomId);
    if (!isValid) return;

    const storageString = localStorage.getItem("viewHistory");
    const viewHistory = storageString ? storageString.split(",") : [];
    if (viewHistory.includes(roomId))
      viewHistory.splice(viewHistory.indexOf(roomId), 1);
    viewHistory.push(roomId);
    localStorage.setItem("viewHistory", String([...viewHistory]));

    fetchRoom({ roomId: Number(roomId) });
  }, [router.query.roomId, fetchRoom]);

  return (
    <>
      <FixedBottomButtons
        leftButtonTitle="参加者を追加する"
        leftButtonOnClick={onModalAddMemberOpen}
      />
      <ModalAddMember
        isOpen={isModalAddMemberOpen}
        onClose={onModalAddMemberClose}
      />
      <Box p={4}>
        <Flex justify="space-between">
          <Box>
            <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
              {room.roomName}
            </Text>
          </Box>
          <Box>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">{room.isOpen ? "受付中" : "締切"}</FormLabel>
              <Switch
                colorScheme="yellow"
                onChange={onChangeIsOpen}
                defaultChecked
              />
            </FormControl>
          </Box>
        </Flex>

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
            memberAmount={room.members.length}
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
          onClick={onDrawerMemberFormOpen}
        >
          参加
          <br />
          入力する
        </Button>
      </Center>
      <NameAndCommentFormDrawer
        isOpen={isDrawerMemberFormOpen}
        onClose={onDrawerMemberFormClose}
      />
    </>
  );
}
