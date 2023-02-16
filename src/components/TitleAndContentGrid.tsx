import React, {ReactElement} from 'react';

const TitleAndContentGrid = (props:{title:string,children:ReactElement,id:string}) => {
    const {title,children,id}=props
    return (
        <div id={id} className={'w-full px-5 md:max-w-[80vw] mx-auto py-10 lg:grid lg:grid-cols-3  lg:divide-x-4 lg:divide-black'}>
            <div className={'flex flex-col justify-center items-start'}>
                <h1 className={'text-left text-4xl mb-10 lg:mb-0 lg:text-9xl lg:font-extralight'}>{title}</h1>
            </div>
            <div className={'col-span-2 lg:p-10'}>{children}</div>
        </div>
    );
};

export default TitleAndContentGrid;