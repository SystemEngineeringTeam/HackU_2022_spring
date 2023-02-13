import { FC } from "react";
import { useRecoilValue } from "recoil";
import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";

import { summaryState } from "@/store/summaryState";

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
      <Box as="button" padding={4}>
        <Text whiteSpace="unset">{summary}</Text>
      </Box>
      <Box>
        <IconButton
          p={1}
          mr={1}
          as={EditIcon}
          variant="none"
          colorScheme="white"
          size="sm"
          aria-label="Edit Icon"
          onClick={onClickEditButton}
        />
      </Box>
    </>
  );
};
