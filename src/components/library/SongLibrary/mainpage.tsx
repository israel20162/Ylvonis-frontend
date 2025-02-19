import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RecentSongs from './recent';
import LikedSongs from './liked';
function MainPage() {
  return (
    <div>
      <Tabs defaultFocus={true} selectedTabClassName={'bg-transparent focused-tab !relative'}>
      <TabList className={'bg-bgGray flex items-center justify-between text-utilGray  py-1 md:py-3 md:items-start md:justify-start'}>
        <Tab>Recent</Tab>
          <Tab>Liked</Tab>
          <Tab>    </Tab>
          <Tab>    </Tab>
        
      </TabList>
      <TabPanel>
       <RecentSongs />
      </TabPanel>
      <TabPanel>
          <LikedSongs />
        </TabPanel>
        <TabPanel>

        </TabPanel>
        <TabPanel>

        </TabPanel>

    </Tabs>
    </div>
  )
}

export default MainPage