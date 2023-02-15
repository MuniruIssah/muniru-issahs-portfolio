import React from 'react';
import {BsChevronUp,BsGithub,BsTwitter,BsLinkedin} from 'react-icons/bs'
import SocialMedia from "./SocialMedia";
const Footer = () => {
    return (
        <footer className={"w-full flex flex-col py-10 bg-stone-800 space-y-10 justify-center items-center text-white"}>
            {/*<BsChevronUp className={'text-3xl cursor-pointer transition-all ease-in-out hover:scale-110 hover:-translate-y-1'}/>*/}
            <div className={'flex justify-center items-center space-x-16'}>
                <SocialMedia to={'https://github.com/MuniruIssah'} icon={<BsGithub/>}/>
                <SocialMedia to={'https://twitter.com/ningen_dewa_nai'} icon={<BsTwitter/>}/>
                <SocialMedia to={'https://www.linkedin.com/in/issah-muniru-b3715a206/'} icon={<BsLinkedin/>}/>
            </div>
            <p className={'text-sm text-gray-400'}>&copy; 2023 - Issah Muniru</p>
        </footer>
    );
};

export default Footer;