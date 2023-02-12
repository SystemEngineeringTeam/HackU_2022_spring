import { summaryState } from "@/store/summaryState";
import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue } from "recoil";

type Props = {
  isEditSummary: boolean;
  setIsEditSummary: (isEditSummary: boolean) => void;
};

export const DisplaySummary: FC<Props> = (props) => {
  const { isEditSummary, setIsEditSummary } = props;

  const summary = useRecoilValue(summaryState);

  const onClickEditButton = () => setIsEditSummary(!isEditSummary);
  return (
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
  );
};
