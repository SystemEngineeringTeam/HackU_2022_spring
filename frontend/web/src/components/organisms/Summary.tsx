import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import { EditSummary } from "../molecules/EditSummary";
import { DisplaySummary } from "../molecules/DisplaySummary";

export const Summary = () => {
  const [isEditSummary, setIsEditSummary] = useState(false);

  return (
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
  );
};
