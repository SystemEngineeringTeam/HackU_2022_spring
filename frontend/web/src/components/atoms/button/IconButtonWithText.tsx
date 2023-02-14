import { FC } from "react";
import {
  As,
  Box,
  Button,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { ModalMoveMember } from "@/components/molecules/modal/ModalMoveMember";
import { ModalDeleteMember } from "@/components/molecules/modal/ModalDeleteMember";

type Props = {
  iconButton: As<any>;
  iconLabel: string;
};

export const IconButtonWithText: FC<Props> = (props) => {
  const { iconButton, iconLabel } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button backgroundColor="white" onClick={onOpen} _hover={{}} _active={{}}>
        <VStack>
          <Icon
            as={iconButton}
            variant="none"
            colorScheme="white"
            size="sm/2"
            aria-label={iconLabel}
          />
          <Box>
            <Text fontSize="xs">{iconLabel}</Text>
          </Box>
        </VStack>
      </Button>
      {iconLabel === "削除" ? (
        <ModalDeleteMember isOpen={isOpen} onClose={onClose} />
      ) : (
        <ModalMoveMember isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};
