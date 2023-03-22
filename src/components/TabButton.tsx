import React, {ReactElement} from 'react';

const TabButton = (props:{children:ReactElement,active:boolean,onClick:()=>void}) => {
    return (
        <button onClick={props.onClick} className={`text-xs rounded-2xl px-4 py-1 transition-all ease-in-out
         ${props.active?'text-black bg-gray-100 shadow-md':'bg-[#202124] text-[#707070] shadow hover:text-white'}`}>
            {props.children}
        </button>
    );
};

export default TabButton;