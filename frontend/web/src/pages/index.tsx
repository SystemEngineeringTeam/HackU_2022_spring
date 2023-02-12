import { DisplaySummary } from "@/components/molecules/DisplaySummary";
import { EditSummary } from "@/components/molecules/EditSummary";
import { CloseIcon, EditIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [isEditSummary, setIsEditSummary] = useState(false);

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
          <EditSummary
            isEditSummary={isEditSummary}
            setIsEditSummary={setIsEditSummary}
          />
        ) : (
          <>
            <DisplaySummary
              isEditSummary={isEditSummary}
              setIsEditSummary={setIsEditSummary}
            />
          </>
        )}
      </Flex>

      <Divider borderColor="gray.400" />
    </>
  );
}
