import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Text,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";

type InputContent = {
  roomName: string;
  summary: string;
};

export default function RoomBuilding() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputContent>();

  return (
    <>
      <FixedBottomButtons leftButtonTitle="部屋一覧を見る" />
      <Box p={2}>
        <Center>
          <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
            部屋を作成
          </Text>
        </Center>
      </Box>
      <form
        onSubmit={handleSubmit(() => {
          console.log("ddd");
        })}
      >
        <Box p={4}>
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
              placeholder="例：新入生歓迎会"
              {...register("roomName", {
                required: true,
              })}
            />
            {errors.roomName && (
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
                部屋の説明
              </Text>
            </FormLabel>
            <Textarea
              id="summary"
              placeholder="例：カラオケの場所（https://...）"
              {...register("summary", {
                required: false,
              })}
            />
          </FormControl>
        </Box>
        <Center>
          <Button
            type="submit"
            backgroundColor="orange.400"
            color="white"
            w="40%"
            mt={4}
            _hover={{ bg: "orange.500" }}
            _active={{ bg: "orange.600" }}
            isLoading={isSubmitting}
          >
            作成
          </Button>
        </Center>
      </form>
    </>
  );
}
