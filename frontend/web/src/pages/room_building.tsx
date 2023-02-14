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

import { AllRooms } from "@/components/organisms/AllRooms";
import { FixedBottomButtons } from "@/components/organisms/FixedBottomButtons";

export default function Home() {
  return (
    <>
      <Box p={4}>
        <Center>
          <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
            部屋を作成
          </Text>
        </Center>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Email address</FormLabel>

          <Textarea
            placeholder="例：カラオケの場所（https://...）"
            //   value={draftSummary}
            //   onChange={onChangeDraftSummary}
          />
        </FormControl>
      </Box>
    </>
  );
}
