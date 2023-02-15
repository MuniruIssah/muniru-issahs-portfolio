import React from 'react';
import {ContactTabsType, ContactTabType} from "../types";

const ContactTabs = (props:ContactTabsType) => {
    return (
        <div className={'flex justify-center items-center space-x-10'}>
            <ContactTab active={props.currentTab} extraStyles={'hover:bg-blue-700'}  activeStyles={'bg-blue-700  border-transparent'} changeTab={props.changeTab}>Email</ContactTab>
            <ContactTab active={props.currentTab} extraStyles={'hover:bg-green-600'} activeStyles={'bg-green-600 border-transparent'} changeTab={props.changeTab}>Whatsapp</ContactTab>
            <ContactTab active={props.currentTab} extraStyles={'hover:bg-blue-400 '} activeStyles={'bg-blue-400 border-transparent'} changeTab={props.changeTab}>Twitter</ContactTab>
        </div>
    );
};

export default ContactTabs;


const ContactTab=(contactTab: ContactTabType & { extraStyles: string } )=>{

    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const button:HTMLButtonElement=e.currentTarget;
        contactTab.changeTab(button.name);
    }
    return(
        <button name={contactTab.children} onClick={handleClick}
                className={`w-24 px-2.5 py-1.5 text-sm border-2 border-white hover:text-white hover:border-0 ${contactTab.extraStyles} 
                             ${contactTab.active==contactTab.children?contactTab.activeStyles:''}`}>
            {contactTab.children}
        </button>
    );
}