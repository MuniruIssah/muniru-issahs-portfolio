import React from 'react';
import {Chrono} from "react-chrono";
import {TimelineItemModel} from "react-chrono/dist/models/TimelineItemModel";

const RoadMapSection = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }] as TimelineItemModel[];
    return (
        <div>
            <Chrono mode="VERTICAL" items={items} hideControls />
        </div>
    );
};

export default RoadMapSection;