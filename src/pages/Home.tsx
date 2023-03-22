import React from 'react';
import SocialMedia from "../components/SocialMedia";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import avatar from '../assets/Image.png'
import TextTransition, { presets } from "react-text-transition";
import TabSection from "../components/TabSection";

const TEXTS = [
    "Hello 👋🏿",
    "Moshi Moshi 👋🏿",
    "Ola 👋🏿",
    "Alo 👋🏿"
];
const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={'max-w-5xl mx-auto min-h-[100vh] grid md:grid-cols-2 px-5'}>
            <div className={'w-full lg:max-w-[80vw] mx-auto py-4 md:py-0   flex flex-col space-y-4 items-center md:items-start  md:space-y-7 justify-center transition-all ease-in-out md:px-4'}>
                <div className={'bg-contain h-16 w-16 md:h-32 md:w-32 rounded-full bg-pink-300 '} style={{backgroundImage:`url(${avatar})`}}>
                </div>
                {/*LARGE SCREEN ABOUT*/}
                <h1 className={'hidden md:block text-3xl text-left font-extrabold transition-all ease-in-out text-gray-300'}>
                    <TextTransition springConfig={presets.wobbly} inline>
                    {TEXTS[index % TEXTS.length]}
                    </TextTransition>, I am Muniru Issah,
                    a Fullstack Software Engineer.
                </h1>
                <div className={'hidden md:flex justify-start items-center space-x-10 text-gray-500'}>
                    <SocialMedia to={'https://github.com/MuniruIssah'} icon={<BsGithub/>}/>
                    <SocialMedia to={'https://twitter.com/ningen_dewa_nai'} icon={<BsTwitter/>}/>
                    <SocialMedia to={'https://www.linkedin.com/in/issah-muniru-b3715a206/'} icon={<BsLinkedin/>}/>
                </div>

                {/*SMALL SCREEN ABOUT*/}
                <div className={'md:hidden text-gray-300 flex flex-col items-center space-y-3'}>
                    <span className={'text-xl font-bold'}>Muniru Issah</span>
                    <span className={'font-light'}>Fullstack Software Engineer</span>
                    <div className={'flex justify-start items-center space-x-6 text-gray-500'}>
                        <SocialMedia small to={'https://github.com/MuniruIssah'} icon={<BsGithub/>}/>
                        <SocialMedia small to={'https://twitter.com/ningen_dewa_nai'} icon={<BsTwitter/>}/>
                        <SocialMedia small to={'https://www.linkedin.com/in/issah-muniru-b3715a206/'} icon={<BsLinkedin/>}/>
                    </div>
                </div>
            </div>
            {/*CONTENT TABS*/}
            <TabSection/>
        </div>
    );
};

export default Home;