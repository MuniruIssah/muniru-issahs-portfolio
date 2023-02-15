import React from 'react';

const Banner = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={'banner min-h-[100vh]'}>
            <div className={'max-w-[80vw] mx-auto h-[100vh] flex flex-col space-y-10 justify-center'}>
                <h1 className={'text-6xl text-left font-extrabold'}>Hello 👋🏿 , I am Muniru Issah,<br/>
                    a Fullstack Software Engineer.
                </h1>
                <button onClick={handleClickScroll} className={'border-2 border-stone-500 bg-white w-36 py-2 text-xl font-bold'}>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;