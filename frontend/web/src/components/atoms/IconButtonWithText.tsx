import { As, Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  iconButton: As<any>;
  iconLabel: string;
};

export const IconButtonWithText: FC<Props> = (props) => {
  const { iconButton, iconLabel } = props;

  return (
    <VStack>
      <IconButton
        as={iconButton}
        variant="none"
        colorScheme="white"
        textAlign="end"
        size="sm/2"
        aria-label="Delete Icon"
      />
      <Box>
        <Text fontSize="xs">{iconLabel}</Text>
      </Box>
    </VStack>
  );
};
