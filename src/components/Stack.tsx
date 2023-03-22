import React, {useMemo, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Select from "./Select";


const Stack = () => {
    const [currentValue,setCurrentValue]=useState(stackOptions[0].value);
    const handleChange=(value:string)=>{
        setCurrentValue(value);
    }

    const options=useMemo(()=>{
        switch (currentValue){
            case 'Frontend':
                return frontEndStack;
            default:
                return backEndStack;
        }
    },[currentValue]);

    return (
        <div className={'w-full relative bg-[#202124] border border-[rgba(240,246,252,0.1)] rounded-xl h-full flex justify-center items-center'}>
            <div className={'absolute top-2 right-2 z-50'}>
                <Select options={stackOptions} currentValue={currentValue} handleChange={handleChange}/>
            </div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {options.map((item,index)=><SwiperSlide key={index+1} >{item}</SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Stack;

const frontEndStack=[
    <i className="devicon-html5-plain-wordmark colored text-6xl"></i>,
    <i className="devicon-javascript-plain colored text-6xl"></i>,
    <i className="devicon-typescript-plain colored text-6xl"></i>,
    <i className="devicon-css3-plain colored text-6xl"></i>,
    <i className="devicon-tailwindcss-plain colored text-6xl"></i>,
    <i className="devicon-bootstrap-plain colored text-6xl"></i>,
    <i className="devicon-react-original colored text-6xl"></i>,
    <i className="devicon-nextjs-original-wordmark colored text-6xl"></i>,
    <i className="devicon-gatsby-plain colored  text-6xl"></i>
]

const backEndStack=[
    <i className="devicon-csharp-plain colored text-6xl"></i>,
    <i className="devicon-dotnetcore-plain colored text-6xl"></i>,
    <i className="devicon-mysql-plain colored text-6xl"></i>,

    <i className="devicon-postgresql-plain colored text-6xl"></i>,

    <i className="devicon-nodejs-plain colored text-6xl"></i>,
    <i className="devicon-express-original colored text-6xl"></i>,
]
const stackOptions=[
    {value:"Frontend",label:"Frontend"},
    {value:"Backend",label:"Backend"},
]