import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { roomState } from "@/store/roomState";
import { useEditMember } from "@/hooks/http/put/useEditMember";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  memberId: number;
};

type InputContent = {
  name: string;
  comment: string;
  tag: string;
};

export const ModalMoveMember: FC<Props> = (props) => {
  const { onClose, isOpen, memberId } = props;

  const { editMember, isLoaded, member, isError, error } = useEditMember();

  const room = useRecoilValue(roomState);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputContent>();

  const tags = room.tags.split(",");
  const options = [
    <option value="" key="">--タグ未選択--</option>,
    ...tags.map(v => <option value={v} key={v}>{v}</option>)
  ];

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    onClose();
    return;
    editMember({ memberId, ...data })
      .then(() => router.push(`/${room.roomId}`));
  });

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onSubmit}>
              <Box p={4}>
                <FormControl isInvalid={errors.name !== undefined}>
                  <FormLabel mb={3}>
                    <Text as="mark" p={2} color="white" bg="teal.200" fontSize="md" fontWeight="bold">
                      名前
                    </Text>
                  </FormLabel>
                  <Input id="name" type="text" placeholder="例：田中山根" {...register("name", { required: true, })} />
                  {errors.name && (
                    <FormErrorMessage>ユーザー名は必須です</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel mt={8} mb={3}>
                    <Text as="mark" p={2} color="white" bg="teal.200" fontSize="md" fontWeight="bold">
                      コメント
                    </Text>
                  </FormLabel>
                  <Textarea id="summary" placeholder="例：3000円以内がいい" {...register("comment", { required: false, })} />
                </FormControl>
                <FormControl>
                  <FormLabel mt={8} mb={3}>
                    <Text as="mark" p={2} color="white" bg="teal.200" fontSize="md" fontWeight="bold">
                      タグ
                    </Text>
                  </FormLabel>
                  <Select id="summary" {...register("tag", { required: false, })}>
                    {options}
                  </Select>
                </FormControl>
              </Box>
              <Center>
                <HStack spacing={4}>
                  <Button
                    type="submit"
                    color="white"
                    backgroundColor="orange.400"
                    _hover={{ bg: "orange.500" }}
                    _active={{ bg: "orange.600" }}
                  >
                    決定
                  </Button>
                  <Button onClick={onClose}>戻る</Button>
                </HStack>
              </Center>
            </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
