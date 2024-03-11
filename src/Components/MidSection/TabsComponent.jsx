import React from 'react'
import './TabsComponent.css'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { tabsData } from '../../DataForPage/dummyData';
  

const TabsComponent = () => {
  return (
    <div id='features'>
           <Tabs id="custom-animation" value="bedroom" className='container'>
            <div className='inner-content'>
              <h2>Categories</h2>
              <p>ThroneCraft offers many features. You can create your own room, decorate your own home, request services, buy modern furniture for a fair price and much more..</p>
            
      <TabsHeader className='Tab-header'>
        {tabsData.map(({label, value})=>(
            <Tab className="tab-header-content" key={value} value={value}>
                <p>{label}</p>
            </Tab>
        ))}
          
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {tabsData.map(({value,  desc, linkText}) =>{
             <TabPanel key={value} value={value} className='tabspanel-content'>
                <p>{ desc}</p>
                <span>{linkText}</span>
             </TabPanel>
        })}
         
      </TabsBody>
      </div>
      <div>
        <TabsBody  animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
            {tabsData.map(({value, img })=> 
            <TabPanel key={value} value={value}>
                <img className="h-[450px]"src={img} alt="" />
            </TabPanel>)}

        </TabsBody>
    </div>
    </Tabs>

    </div>
  )
}

export default TabsComponent