import React, {ReactElement} from 'react';

const ContactTabBody = (props:{children:ReactElement,icon:ReactElement,title:string}) => {
    return (
        <div className={'flex flex-col items-center justify-center space-y-5'}>
            <div className={'text-5xl font-light p-6 rounded-full w-auto border-2 border-stone-200 '}>{props.icon}</div>
            <p className={'text-xl'}>{props.title}</p>
            {props.children}
        </div>
    );
};

export default ContactTabBody;