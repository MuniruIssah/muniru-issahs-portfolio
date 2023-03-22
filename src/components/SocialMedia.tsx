import React, {FC} from 'react';
import {SocialMediaType} from "../types";

const SocialMedia : FC<SocialMediaType>= (socialMedia:SocialMediaType) => {

    const handleClick=()=>{
        window.open(socialMedia.to,'')
    }
    return (
        <button onClick={handleClick} className={`${socialMedia.small?'text-xl':'text-3xl'} transition-all ease-in-out hover:scale-110 hover:-translate-y-1`}>
            {socialMedia.icon}
        </button>
    );
};

export default SocialMedia;