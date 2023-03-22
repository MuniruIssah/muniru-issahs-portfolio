import React from 'react';
import {IoOpenOutline} from "react-icons/io5";
import {projectType} from "../types";

const Projects = () => {
    return (
        <div className={'h-full w-full flex flex-col space-y-5 overflow-auto py-5'}>
            {projects.map((item,index)=><ProjectItem key={index} {...item} />)}
        </div>
    );
};

export default Projects;


const ProjectItem=(props:projectType)=>{
    return (
        <button type={'button'} className={'w-full transition-all ease-in-out relative bg-[#202124] border border-[rgba(240,246,252,0.1)] rounded-xl h-auto shrink-0 px-4 py-3 flex flex-col space-y-3'}>
            <IoOpenOutline className={'text-[rgba(240,246,252,0.5)] absolute top-3 right-3'}/>
            <div className='text-white text-left flex flex-col space-y-2'>
                <h1 className={'text-[14px] font-medium uppercase text-sm text-blue-400'}>{props.title}</h1>
                <p className={'text-sm font-light text-[rgba(240,246,252,0.6)]'}>{props.description}</p>
            </div>
            <div className={'flex space-x-3 self-end '}>
                {props.tools.map(item => item)}
            </div>
        </button>
    );
}


const projects=[
    {
        title:"RAMS",
        description:"An ecommerce website for Rams Company Limited, Ghana.",
        tools:[
            <i className="devicon-react-original colored text-base grayscale hover:grayscale-0"></i>,
            <i className="devicon-typescript-plain colored text-base grayscale hover:grayscale-0"></i>,
            <i className="devicon-tailwindcss-plain colored text-base grayscale hover:grayscale-0"></i>
        ]
    },
    {
        title:"DRIBBBLE TO GOAL",
        description:"A react dribbble clones dump",
        tools:[
            <i className="devicon-react-original colored text-base grayscale hover:grayscale-0"></i>,
            <i className="devicon-typescript-plain colored text-base grayscale hover:grayscale-0"></i>,
            <i className="devicon-tailwindcss-plain colored text-base grayscale hover:grayscale-0"></i>
        ]
    }
]