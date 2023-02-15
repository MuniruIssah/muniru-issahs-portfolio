import React, {ReactElement} from 'react';

const TitleAndContentGrid = (props:{title:string,children:ReactElement,id:string}) => {
    const {title,children,id}=props
    return (
        <div id={id} className={'max-w-[80vw] mx-auto py-10 grid grid-cols-3  divide-x-4 divide-black'}>
            <div className={'flex flex-col justify-center items-start'}>
                <h1 className={'text-left text-9xl font-extralight'}>{title}</h1>
            </div>
            <div className={'col-span-2 p-10'}>{children}</div>
        </div>
    );
};

export default TitleAndContentGrid;