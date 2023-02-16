import React, {ReactElement} from 'react';
import {Chrono} from "react-chrono";
import {TimelineItemModel} from "react-chrono/dist/models/TimelineItemModel";

const RoadMapSection = (props:{icon:string,name:string,description:string,dateStarted:string,dateEnded?:string}) => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }] as TimelineItemModel[];
    return (
        <details className={'w-full shadow transition-all ease-in-out'}>
            <summary className={'flex items-center space-x-7 px-5 py-3'}>
                <div className={'w-16 h-16'} style={{backgroundImage:`url(${props.icon})`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}></div>
                <div className={'text-left flex flex-col space-y-3'}>
                    <h3 className={'text-xl uppercase'}>{props.name}</h3>
                    <h3 className={'text-lg font-light text-gray-700'}>{props.description}</h3>
                    <div className={'text-sm font-light text-gray-500 flex items-center space-x-3'}>
                        <span>{props.dateStarted}</span>
                        <span>-</span>
                        <span>{props.dateEnded??'Present'}</span>
                    </div>
                </div>
            </summary>
            <Chrono mode="VERTICAL" items={items} hideControls />
        </details>
    );
};

export default RoadMapSection;