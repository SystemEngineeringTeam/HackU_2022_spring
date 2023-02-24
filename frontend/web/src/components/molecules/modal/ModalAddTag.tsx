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
  tag: string;
};

export const ModalAddTag: FC<Props> = (props) => {
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
        <ModalHeader>タグ追加</ModalHeader>
        <ModalCloseButton />
        <form
          onSubmit={handleSubmit(() => {
            console.log("ddd");
          })}
        >
          <ModalBody>
            <FormControl isInvalid={errors.tag !== undefined}>
              <FormLabel mb={3}>
                <Text
                  as="mark"
                  p={2}
                  color="white"
                  bg="teal.200"
                  fontSize="md"
                  fontWeight="bold"
                >
                  タグ名
                </Text>
              </FormLabel>
              <Input
                id="tag"
                type="text"
                placeholder="例：支払い済み"
                {...register("tag", {
                  required: true,
                })}
              />
              {errors.tag && (
                <FormErrorMessage>タグ名は必須です。</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Center>
              <HStack spacing={4}>
                <Button onClick={onClose}>戻る</Button>
                <Button
                  type="submit"
                  color="white"
                  backgroundColor="orange.400"
                  _hover={{ bg: "orange.500" }}
                  _active={{ bg: "orange.600" }}
                  isLoading={isSubmitting}
                  onClick={errors.tag ? undefined : onClose}
                >
                  追加
                </Button>
              </HStack>
            </Center>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
