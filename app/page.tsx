'use client';

import { useEffect, useState } from "react";

import Header from "@/components/header";
import About from "@/containers/About";
import Contacto from "@/containers/Contacto";
import Info from "@/containers/Info";
import Panel from "@/containers/Panel";
import Resume from "@/containers/Resume";
import Skills from "@/containers/Skills";
import { aboutType, masterDataEN, masterDataES, navbarOptionTypes, recommendationsType, resumeType } from "@/utils/masterData";
import useScreenSize from "@/hooks/useScreenSize";


export default function Home() {
  const [navBar, setNavBar] = useState<navbarOptionTypes>("about");
  const [change, setChange] = useState<boolean>(false);
  const [leng, setLeng] = useState<'EN' | 'ES'>('ES');
  const [dataAbout, setDataAbout] = useState<aboutType>(masterDataES.about);
  const [dataOpinions, setDataOpinions] = useState<recommendationsType[]>(masterDataES.recommendations);
  const [dataResume, setDataResume] = useState<resumeType>(masterDataES.resume);

  const { width } = useScreenSize();

  useEffect(()=>{
    setDataAbout(leng === 'ES' ? masterDataES.about : masterDataEN.about)
    setDataResume(leng === 'ES' ? masterDataES.resume : masterDataEN.resume)
    setDataOpinions(leng === 'ES' ? masterDataES.recommendations : masterDataEN.recommendations)
  }, [leng])
  
  const changeNavBar = (nav: navbarOptionTypes) => {
    if(width < 762) {
      window.location.replace('#'+nav);
      setTimeout(()=>{setNavBar(nav);},300)
    }else {
      setChange(true);
      setTimeout(()=>{setNavBar(nav);},300);
      setTimeout(()=>{setChange(false);},500);
    }
  }

  const changeLenguage = (leng: 'EN' | 'ES') => {
    setLeng(leng);
  }
  
  return (
    <section className="flex items-center xl:h-screen flex-col xl:flex-row">
      <Header navBar={navBar} changeNavBar={changeNavBar} data={leng === 'ES' ? masterDataES : masterDataEN}/>
      <Info/>
      <Panel change={change} changeLenguage={changeLenguage} leng={leng}>
        {
          width < 768 ? <>
          <About about={dataAbout} opinions={dataOpinions}/>
          <Resume {...dataResume}/>
          <Skills/>
          <Contacto/>
          </> : <>
          {
            navBar === "about" && <About about={dataAbout} opinions={dataOpinions}/>
          }
          {
            navBar === "resume" && <Resume {...dataResume}/>
          }
          {
            navBar === "skill" && <Skills/>
          }
          {
            navBar === "contact" && <Contacto/>
          }
          </>
        }
        
      </Panel>
    </section>
  );
}
