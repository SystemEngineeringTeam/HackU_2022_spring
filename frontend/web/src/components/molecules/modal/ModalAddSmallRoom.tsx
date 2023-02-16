import { FC } from "react";
import { useForm } from "react-hook-form";
import {
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
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type InputContent = {
  roomName: string;
};

export const ModalAddSmallRoom: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputContent>();

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalHeader>小部屋作成</ModalHeader>
        <ModalCloseButton />
        <form
          onSubmit={handleSubmit(() => {
            console.log("ddd");
          })}
        >
          <ModalBody>
            <FormControl isInvalid={errors.roomName !== undefined}>
              <FormLabel mb={3}>
                <Text
                  as="mark"
                  p={2}
                  color="white"
                  bg="teal.200"
                  fontSize="md"
                  fontWeight="bold"
                >
                  部屋名
                </Text>
              </FormLabel>
              <Input
                id="roomName"
                type="text"
                placeholder="例：カラオケ"
                {...register("roomName", {
                  required: true,
                })}
              />
              {errors.roomName && (
                <FormErrorMessage>部屋名は必須です。</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Center>
              <HStack spacing={4}>
                <Button
                  type="submit"
                  color="white"
                  backgroundColor="orange.400"
                  _hover={{ bg: "orange.500" }}
                  _active={{ bg: "orange.600" }}
                  isLoading={isSubmitting}
                  onClick={errors.roomName ? undefined : onClose}
                >
                  作成
                </Button>
                <Button onClick={onClose}>戻る</Button>
              </HStack>
            </Center>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
