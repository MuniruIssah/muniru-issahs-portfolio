import React, {ReactElement, useMemo, useState} from 'react';
import ContactTabs from "./ContactTabs";
import ContactTabBody from "./ContactTabBody";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {CiTwitter,CiMail} from "react-icons/ci";

const Contact = () => {
    const [state,setState]=useState("Email");
    const handleTab=(newTab:string)=>{
        setState(newTab);
        console.log("This is Active",state)
    }

    const memo=useMemo(()=>{
        switch (state){
            case "Email":
                return <ContactTabBody icon={<CiMail/>} title={"Send Me an Email"}><a href={'mailto:munirissah2092@gmail.com'}>Send</a></ContactTabBody>
            case "Whatsapp":
                return <ContactTabBody icon={<AiOutlineWhatsApp/>} title={"Send me a Whatsapp Message"}><a href={'https://wa.me/233505707987'} target={'_blank'}>Message</a></ContactTabBody>
            default:
                return <ContactTabBody icon={<CiTwitter/>} title={"DM me on Twitter"}><a
                    href="https://twitter.com/messages/compose?recipient_id=3805104374&text=Hello%20world"
                    target={'_blank'}
                    className="twitter-dm-button"
                    data-screen-name="@ningen_dewa_nai">
                    Message</a></ContactTabBody>

        }
    },[state])
    return (
        <section className={'w-full min-h-[50vh] flex flex-col space-y-5 p-10 text-white contactBackground'}>
                <h3 className={'text-3xl font-black'}>HIT ME UP</h3>
                <p className={'text-lg font-medium'}>I would love to hear from you</p>
                <ContactTabs currentTab={state} changeTab={handleTab}/>
            {memo}
        </section>
    );
};

export default Contact;