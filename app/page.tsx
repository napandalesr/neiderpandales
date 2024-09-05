'use client';

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

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
      //window.location.replace('#'+nav);
      setTimeout(()=>{setNavBar(nav);},100)
      const element = document.getElementById(nav);

    // Verifica si el elemento existe
    if (element) {
        // Calcula la posición del elemento y ajusta 100px hacia arriba
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;

        // Desplaza la ventana hacia la posición calculada
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
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
      {
        width >=760 && <AnimatedCursor 
        color="#fff"
        innerSize={8}
        outerSize={35}
        innerScale={0.1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          backgroundColor: '#fff',
          mixBlendMode: 'exclusion',
        }}
        showSystemCursor/>
      }
      
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
