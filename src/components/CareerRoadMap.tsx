import React from 'react';
import RoadMapSection from "./RoadMapSection";

const CareerRoadMap = () => {
    return (
        <div className={'w-full'}>
            <div className={'w-full text-white text-3xl font-semibold py-4 bg-gray-800'}>CAREER ROADMAP</div>
            {new Array(5).fill(0).map((item,index)=><RoadMapSection key={index}/>)}
        </div>
    );
};

export default CareerRoadMap;