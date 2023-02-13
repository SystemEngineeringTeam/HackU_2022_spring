import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import { EditSummary } from "../molecules/summary/EditSummary";
import { DisplaySummary } from "../molecules/summary/DisplaySummary";

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
