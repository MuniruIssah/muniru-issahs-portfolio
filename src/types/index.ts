import {ReactElement} from "react";

interface SocialMediaType{
   to:string,
   icon:ReactElement

}
interface ContactTabsType{
   currentTab:string,
   changeTab:(newTab:string)=>void
}
interface ContactTabType{
   children:string,
   changeTab:(newTab:string)=>void
   active:string,
   activeStyles:string
}

export type {SocialMediaType,ContactTabType,ContactTabsType}