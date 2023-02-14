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
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <Box p={4}>
        <Center>
          <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
            部屋を作成
          </Text>
        </Center>
      </Box>
      <form>
        <FormControl>
          <FormLabel>
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
            {...register("roomName", {
              required: true,
            })}
          />
          <FormErrorMessage>
            {errors.roomName && errors.roomName.message}
          </FormErrorMessage>

          <FormLabel>
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
          <Textarea placeholder="例：カラオケの場所（https://...）" />
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
      </form>
    </>
  );
}
