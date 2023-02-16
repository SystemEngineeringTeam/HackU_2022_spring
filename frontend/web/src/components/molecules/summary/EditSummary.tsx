import { useState, FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  VStack,
  Flex,
  Textarea,
  IconButton,
  Center,
  Button,
} from "@chakra-ui/react";

import { summaryState } from "@/store/summaryState";

type Props = {
  isEditSummary: boolean;
  setIsEditSummary: (isEditSummary: boolean) => void;
};

export const EditSummary: FC<Props> = (props) => {
  const { isEditSummary, setIsEditSummary } = props;

  const [summay, setSummary] = useRecoilState(summaryState);

  const [draftSummary, setDraftSummary] = useState(summay);

  const onClickEditButton = () => setIsEditSummary(!isEditSummary);

  const onClickPreserveSummary = (draftSummary: string) => {
    setSummary(draftSummary);
    setIsEditSummary(!isEditSummary);
  };

  const onChangeDraftSummary = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDraftSummary(e.target.value);

  return (
    <VStack w="100%" spacing={4} align="strech">
      <Flex w="100%">
        <Textarea
          mt={2}
          ml={2}
          placeholder="例：カラオケの場所（https://...）"
          value={draftSummary}
          onChange={onChangeDraftSummary}
        />
        <IconButton
          p={1}
          mr={1}
          as={SmallCloseIcon}
          variant="none"
          colorscheme="white"
          textAlign="end"
          size="sm"
          aria-label="Small Close Icon"
          onClick={onClickEditButton}
        />
      </Flex>
      <Center>
        <Button
          backgroundColor="orange.400"
          color="white"
          w="80%"
          mb={2}
          _hover={{ bg: "orange.500" }}
          _active={{ bg: "orange.600" }}
          onClick={() => onClickPreserveSummary(draftSummary)}
        >
          変更を保存する
        </Button>
      </Center>
    </VStack>
  );
};
