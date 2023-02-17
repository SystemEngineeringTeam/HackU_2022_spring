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
  memberId: number;
};

export const IconButtonWithText: FC<Props> = (props) => {
  const { iconButton, iconLabel, memberId } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button backgroundColor="white" onClick={onOpen} _hover={{}} _active={{}}>
        <VStack>
          <Icon
            as={iconButton}
            variant="none"
            colorscheme="white"
            size="sm/2"
            aria-label={iconLabel}
          />
          <Box>
            <Text fontSize="xs">{iconLabel}</Text>
          </Box>
        </VStack>
      </Button>
      {iconLabel === "削除" ? (
        <ModalDeleteMember {...{ isOpen, onClose, memberId }} />
      ) : (
        <ModalMoveMember {...{ isOpen, onClose }} />
      )}
    </>
  );
};
