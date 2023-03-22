import React, {useState} from 'react';
import {optionsType} from "../types";
import {GoChevronDown, GoPrimitiveDot} from "react-icons/go";

const Select = (props:{options:Array<optionsType>,currentValue:string,handleChange:(value:string)=>void}) => {
    const {options}=props
    const [showOptions,setShowOptions]=useState(false)

    const handleShowOptions=()=>setShowOptions(prevState => !prevState)

    const handleChange=(value:string)=>{
        props.handleChange(value);
        handleShowOptions()
    }
    return (
        <div className={'relative'}>
            <button className={'text-xs py-1.5 pl-3 pr-1 bg-[rgba(56,139,253,0.15)]  rounded text-[#58a6ff] font-medium flex items-center space-x-2'} onClick={handleShowOptions}>
                <span>{props.currentValue}</span>
                <GoChevronDown/>
            </button>
            {showOptions && <div className={'absolute bg-[#161b22] right-0 mt-2 shadow-md border border-[#30363d] w-[120%] flex flex-col py-1.5 rounded'}>
                {options.map((item, index) => <Option key={index} active={item.value=== props.currentValue} {...item} handleChange={handleChange}/>)}
            </div>}
        </div>
    );
};

export default Select;

type handler={handleChange:(value:string)=>void,active:boolean}

const Option=(props: optionsType & handler )=>{
    const {value,label,active}=props

    const handleClick=(value:string)=>props.handleChange(value)

    return(
        <button
            className={`text-gray-100 text-sm py-1.5 pl-3 hover:bg-blue-400 hover:text-white text-left
                        ${active?'bg-blue-500 text-white':''}
        `} onClick={()=>handleClick(value)}>{label}</button>
    );
}