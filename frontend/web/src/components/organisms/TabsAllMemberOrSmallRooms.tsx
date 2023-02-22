import { FC } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { AllMembers } from "./AllMembers";
import { AccordionMembers } from "./AccordionMembers";

export const TabsAllMemberOrSmallRooms: FC = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab key={0}>参加者のみ表示</Tab>
        <Tab key={1}>タグごとに表示</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AllMembers />
        </TabPanel>
        <TabPanel p={0}>
          <AccordionMembers />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
