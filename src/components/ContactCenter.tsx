import React, {ReactElement} from 'react';
import {IoIosText,IoLogoWhatsapp} from "react-icons/io";
import {IoLogoTwitter} from "react-icons/io5"
const ContactCenter = () => {
    return (
        <div className={'w-full relative bg-[#202124] border border-[rgba(240,246,252,0.1)] rounded-xl h-full flex flex-col text-left p-4'}>
            <h1 className={'text-blue-400 text-sm'}>Contact Me</h1>
            <div className={'my-4 space-x-5'}>
                {icons.map((item,index)=><ContactIcon key={index} {...item} />)}
            </div>
        </div>
    );
};

export default ContactCenter;


const ContactIcon=(props:{icon:ReactElement,background:string})=>{
    return(
        <button className={`text-4xl ${props.background} rounded-2xl shadow p-2.5 
        text-white transition-all ease-in-out  hover:scale-125 peer peer-hover:scale-105 `}>{props.icon}</button>
    );
}


const icons=[
    {
        icon:<IoIosText className={'drop-shadow-xl'}/>,
        background:"bg-green-500"
    },
    {
        icon:<IoLogoWhatsapp className={'drop-shadow-xl'}/>,
        background:"bg-[#25D366]"

    },
    {
        icon:<IoLogoTwitter className={'drop-shadow-xl'}/>,
        background:"bg-blue-500"

    },
]