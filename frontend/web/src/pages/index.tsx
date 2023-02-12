import { CloseIcon, EditIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Text,
  Icon,
  IconButton,
  Input,
  Textarea,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [isEditSummary, setIsEditSummary] = useState(false);
  const [draftSummary, setDraftSummary] = useState("");
  const [summary, setSummary] = useState("");

  const onClickEditButton = () => setIsEditSummary(!isEditSummary);

  const onClickPreserveSummary = (draftSummary: string) => {
    setSummary(draftSummary);
    setIsEditSummary(!isEditSummary);
  };

  const onChangeDraftSummary = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDraftSummary(e.target.value);

  return (
    <>
      {/* <Flex> */}
      <Box padding={4}>
        <Text fontSize="2xl" fontWeight="bold" whiteSpace="unset">
          部屋のタイトル
        </Text>
      </Box>
      {/* <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0"></FormLabel>
            <Switch size="md" />
          </FormControl>
        </Box> */}
      {/* </Flex> */}
      <Divider borderColor="gray.400" />
      <Flex justify="space-between">
        {isEditSummary ? (
          <>
            <VStack w="100%" align="strech">
              <Flex w="100%">
                <Textarea
                  placeholder="例：カラオケの場所（https://...）"
                  value={draftSummary}
                  onChange={onChangeDraftSummary}
                />
                <IconButton
                  padding={1}
                  mr={1}
                  as={SmallCloseIcon}
                  variant="none"
                  colorScheme="white"
                  textAlign="end"
                  size="sm"
                  aria-label="Edit Icon"
                  onClick={onClickEditButton}
                />
              </Flex>
              <Center>
                <Button
                  w="80%"
                  mb={4}
                  backgroundColor="orange.400"
                  color="white"
                  onClick={() => onClickPreserveSummary(draftSummary)}
                >
                  変更を保存する
                </Button>
              </Center>
            </VStack>
          </>
        ) : (
          <>
            <Box padding={4}>
              <Text whiteSpace="unset">{summary}</Text>
            </Box>
            <Box>
              <IconButton
                padding={1}
                as={EditIcon}
                variant="none"
                colorScheme="white"
                textAlign="end"
                size="sm"
                aria-label="Edit Icon"
                onClick={onClickEditButton}
              />
            </Box>
          </>
        )}
      </Flex>

      <Divider borderColor="gray.400" />
    </>
  );
}
