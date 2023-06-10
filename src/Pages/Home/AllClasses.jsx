import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseClasses from '../../Hooks/UseClasses';
import OrderClass from '../../components/OrderClass';
const AllClasses = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [classes] = UseClasses()
    const keyboard = classes.filter(item => item.department === 'Keyboard')
    const strings = classes.filter(item => item.department === 'Strings')
    const guitar = classes.filter(item => item.department === 'Guitar')
    const vocals = classes.filter(item => item.department === 'Vocals')
    const percussion = classes.filter(item => item.department === 'Percussion')
    const woodwinds = classes.filter(item => item.department === 'Woodwinds')
    const brass = classes.filter(item => item.department === 'Brass')
    return (
        <div>
            <Helmet><title>Music School || Our Classes</title></Helmet>
            <section>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-center mt-16 mb-16 border-b-2'>
                        <Tab>KEYBOARD</Tab>
                        <Tab>STRINGS</Tab>
                        <Tab>GUITER</Tab>
                        <Tab>VOCALS</Tab>
                        <Tab>PERCUSSION</Tab>
                        <Tab>WOODWINDS</Tab>
                        <Tab>BRASS</Tab>
                    </TabList>
                    <TabPanel className='text-center'>
                        <OrderClass items={keyboard}/>
                    </TabPanel>
                    <TabPanel className='text-center'>
                        <OrderClass items={strings}/>
                    </TabPanel>
                    <TabPanel className='text-center'>
                        <OrderClass items={guitar}/>
                    </TabPanel>
                    <TabPanel className='text-center'>
                        <OrderClass items={vocals}/>
                    </TabPanel>
                    <TabPanel className='text-center'>
                        <OrderClass items={percussion}/>
                    </TabPanel>
                    <TabPanel className='text-center'>
                        <OrderClass items={woodwinds}/>
                    </TabPanel>
                    <TabPanel className='text-center'>
                        <OrderClass items={brass}/>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default AllClasses;