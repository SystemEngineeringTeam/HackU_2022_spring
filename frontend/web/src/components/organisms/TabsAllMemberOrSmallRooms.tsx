import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { AllMembers } from "./AllMembers";
import { AccordionMembers } from "./AccordionMembers";

export const TabsAllMemberOrSmallRooms = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>参加者のみ表示</Tab>
        <Tab>小部屋も表示</Tab>
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
