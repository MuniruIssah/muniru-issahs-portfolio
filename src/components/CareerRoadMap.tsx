import React from 'react';
import RoadMapSection from "./RoadMapSection";
import {carrerPath} from "../utils";

const CareerRoadMap = () => {
    return (
        <div className={'w-full'}>
            <div className={'w-full text-white text-3xl font-semibold py-4 bg-blue-800'}>CAREER ROADMAP</div>
            <div className={'max-w-[80vw] mx-auto flex flex-col space-y-5 py-10'}>
                {carrerPath.map((item,index)=><React.Fragment key={index}><RoadMapSection {...item} key={index}/>
                    {index<carrerPath.length-1&&<div className={'vertically'}></div>}</React.Fragment>)}


            </div>
        </div>
    );
};

export default CareerRoadMap;