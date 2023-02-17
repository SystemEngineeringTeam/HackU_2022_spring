import { FC } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { roomState } from "@/store/roomState";

type Props = {
  isEditSummary: boolean;
  setIsEditSummary: (isEditSummary: boolean) => void;
};

export const DisplaySummary: FC<Props> = (props) => {
  const { isEditSummary, setIsEditSummary } = props;
  const onClickEditButton = () => setIsEditSummary(!isEditSummary);
  const room = useRecoilValue(roomState);

  return (
    <>
      <Box as="button" padding={4}>
        <Text whiteSpace="unset">{room.summary}</Text>
      </Box>
      <Box>
        <IconButton
          p={1}
          mr={1}
          as={EditIcon}
          variant="none"
          colorscheme="white"
          size="sm"
          aria-label="Edit Icon"
          onClick={onClickEditButton}
        />
      </Box>
    </>
  );
};
