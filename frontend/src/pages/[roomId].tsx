import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Spacer,
  Switch,
  Text,
} from "@chakra-ui/react";

import { roomState } from "@/store/roomState";
import { useDate } from "@/hooks/date/useDate";
import { Summary } from "@/components/organisms/Summary";
import { useEditRoom } from "@/hooks/http/put/useEditRoom";
import { MembersAmount } from "@/components/organisms/MembersAmount";
import { NameAndCommentFormDrawer } from "@/components/molecules/drawer/NameAndCommentFormDrawer";
import { ShareQrCode } from "@/components/atoms/image/ShareQrCode";
import { AccordionMembers } from "@/components/organisms/AccordionMembers";
import { useGetRoom } from "@/hooks/http/get/useFetchRoom";
import { UnderButton } from "@/components/atoms/button/UnderButton";

export default function RoomId() {
  const router = useRouter();

  const { formatDate } = useDate();

  const { fetchRoom } = useGetRoom();
  const { editRoom } = useEditRoom();

  const [isDrawerMemberFormOpen, setIsDrawerMemberFormOpen] = useState(false);

  const room = useRecoilValue(roomState);

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
      <HStack
        h="70px"
        w="100%"
        spacing={0}
        position="fixed"
        zIndex={1}
        bottom="0%"
      >
        <UnderButton
          width="100"
          color="orange"
          title={"参加者を追加する"}
          isDisabled={!room.isOpen}
          onClick={onDrawerMemberFormOpen}
        />
      </HStack>
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
                isChecked={room.isOpen}
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
      <HStack>
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
        <Spacer />
        <ShareQrCode />
      </HStack>
      <AccordionMembers />

      <NameAndCommentFormDrawer
        isOpen={isDrawerMemberFormOpen}
        onClose={onDrawerMemberFormClose}
      />
    </>
  );
}
