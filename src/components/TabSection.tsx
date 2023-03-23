import React, {useMemo, useState} from 'react';
import TabButton from "./TabButton";
import Stack from "./Stack";
import ContactCenter from "./ContactCenter";
import Projects from "./Projects";

const tabs=[
    'Stack',
    'Projects',
]
const TabSection = () => {
    const [currentTab,setCurrentTab]=useState('Stack')
    const display=useMemo(()=>{
        switch (currentTab){
            case "Stack":
                return <Stack/>
            // case "Contact Me":
            //     return <ContactCenter/>
            default:
               return <Projects/>
        }
    },[currentTab])

    const handleChange=(value:string)=>setCurrentTab(value)
    return (
        <div className={'flex flex-col md:justify-center space-y-6 md:space-y-10'}>
            <div className={'flex space-x-4 justify-center md:justify-start'}>
                {tabs.map((item,index)=><TabButton key={index} active={item===currentTab} onClick={()=>handleChange(item)}><>{item}</></TabButton>)}
            </div>
            <div className={'h-[50vh] md:h-[40vh] 2xl:h-[30vh] flex items-start'}>
                {display}
            </div>
        </div>
    );
};

export default TabSection;