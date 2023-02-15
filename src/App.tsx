import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import ScrollToTop from "react-scroll-to-top";
import {BsChevronUp} from "react-icons/bs";
import TitleAndContentGrid from "./components/TitleAndContentGrid";
import CareerRoadMap from "./components/CareerRoadMap";
import FrontendLanguages from "./components/FrontendLanguages";
import BackendLanguages from "./components/BackendLanguages";
function App() {
  return (
    <div className="App">
        <ScrollToTop smooth component={<div className={'text-center'}><BsChevronUp className={'text-3xl inline'}/></div>}/>
        <Banner/>
        <br/>
        <TitleAndContentGrid title={'About Me'} id={'about'}>
            <p className={'text-left text-xl'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TitleAndContentGrid>
        <br/>

        <CareerRoadMap/>
        <br/>
        <hr className={'border-gray-700'} />

        <TitleAndContentGrid title={'My Tools'} id={'stack'}>
            <div className={'flex flex-col space-y-5'}>
                <div className={'border border-stone-500'}>
                    <header className={'w-full bg-blue-700 text-white font-bold text-left p-2.5 uppercase'}>
                        Frontend Frameworks and Languages
                    </header>
                    <main className={'p-2 text-left flex flex-wrap space-x-3 items-center space-y-3'}>
                        <FrontendLanguages/>
                    </main>
                </div>
                <div className={'border border-stone-500'}>
                    <header className={'w-full bg-yellow-700 text-white font-bold text-left p-2'}>
                        Backend Frameworks and Languages
                    </header>
                    <main className={'p-3 text-left flex flex-wrap space-x-3 items-center'}>
                        <BackendLanguages/>
                    </main>
                </div>
            </div>
        </TitleAndContentGrid>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
