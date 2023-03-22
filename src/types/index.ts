import {ReactElement} from "react";

interface SocialMediaType{
   to:string,
   icon:ReactElement,
   small?:boolean

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
interface optionsType{
   value:string,
   label:string
}

interface projectType{
   title:string,
   description:string,
   tools:Array<ReactElement>
}
export type {SocialMediaType,ContactTabType,ContactTabsType,optionsType,projectType}