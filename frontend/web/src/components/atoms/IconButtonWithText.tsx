import {
  As,
  Box,
  Button,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { ModalParticipantDelete } from "../molecules/ModalParticipantDelete";

type Props = {
  iconButton: As<any>;
  iconLabel: string;
};

export const IconButtonWithText: FC<Props> = (props) => {
  const { iconButton, iconLabel } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button backgroundColor="white" onClick={onOpen}>
        <VStack>
          <Icon
            as={iconButton}
            variant="none"
            colorScheme="white"
            size="sm/2"
            aria-label="Delete Icon"
            
          />
          <Box>
            <Text fontSize="xs">{iconLabel}</Text>
          </Box>
        </VStack>
      </Button>

      <ModalParticipantDelete isOpen={isOpen} onClose={onClose} />
    </>
  );
};
