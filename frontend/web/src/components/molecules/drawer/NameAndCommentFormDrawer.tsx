import { FC } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

type InputContent = {
  name: string;
  comment: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const NameAndCommentFormDrawer: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputContent>();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    // POST で値を送る

    // roomIdと同じパスに遷移？
    router.push("/1");
  });

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">参加フォーム</DrawerHeader>
        <DrawerBody>
          <form onSubmit={onSubmit}>
            <Box p={4}>
              <FormControl isInvalid={errors.name !== undefined}>
                <FormLabel mb={3}>
                  <Text
                    as="mark"
                    p={2}
                    color="white"
                    bg="teal.200"
                    fontSize="md"
                    fontWeight="bold"
                  >
                    名前
                  </Text>
                </FormLabel>
                <Input
                  id="roomName"
                  type="text"
                  placeholder="例：田中山根"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && (
                  <FormErrorMessage>部屋名は必須です。</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel mt={8} mb={3}>
                  <Text
                    as="mark"
                    p={2}
                    color="white"
                    bg="teal.200"
                    fontSize="md"
                    fontWeight="bold"
                  >
                    コメント
                  </Text>
                </FormLabel>
                <Textarea
                  id="summary"
                  placeholder="例：3000円以内がいい"
                  {...register("comment", {
                    required: false,
                  })}
                />
              </FormControl>
            </Box>
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
                isLoading={isSubmitting}
              >
                参加する
              </Button>
            </Center>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
