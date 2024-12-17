'use client';

import { useReducer, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

import Header from "@/components/header";
import Modal from "@/components/Modal";
import { About, Contacto, Info, Libreries, Panel, Resume, Skills } from "@/containers";
import { masterDataEN, masterDataES, navbarOptionTypes } from "@/utils/masterData";
import useScreenSize from "@/hooks/useScreenSize";
import { initialState, LenguageReducer } from "@/reducers/lenguage";
import { lengAction } from "@/reducers/lenguage/action";

export default function Home() {
  const [navBar, setNavBar] = useState<navbarOptionTypes>("about");
  const [changePanel, setChangePanel] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [video, setVideo] = useState<string>('');
  const [ lenguageState, dispatch ] = useReducer(LenguageReducer, initialState);
  const { width } = useScreenSize();
  
  const changeNavBar = (nav: navbarOptionTypes) => {
    if(width < 762) {
      setTimeout(()=>{setNavBar(nav);},100)
      const element = document.getElementById(nav);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }else {
      setChangePanel(true);
      setTimeout(()=>{setNavBar(nav);},300);
      setTimeout(()=>{setChangePanel(false);},500);
    }
  }

  const changeLenguage = (leng: 'EN' | 'ES') => {
    dispatch(lengAction(leng));
  }

  const changeShowModal = (src: string) => {
    setVideo(src);
    setShowModal(!showModal);
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
      <Header navBar={navBar} changeNavBar={changeNavBar} data={lenguageState.leng === 'ES' ? masterDataES : masterDataEN}/>
      <Info/>
      <Panel change={changePanel} changeLenguage={changeLenguage} leng={lenguageState.leng}>
        {
          width < 768 ? <>
          <About about={lenguageState.about} opinions={lenguageState.opinions}/>
          <Resume {...lenguageState.resume}/>
          <Skills/>
          <Libreries changeShowModal={changeShowModal}/>
          <Contacto/>
          </> : <>
          {
            navBar === "about" && <About about={lenguageState.about} opinions={lenguageState.opinions}/>
          }
          {
            navBar === "resume" && <Resume {...lenguageState.resume}/>
          }
          {
            navBar === "skill" && <Skills/>
          }
          {
            navBar === "library" && <Libreries changeShowModal={changeShowModal}/>
          }
          {
            navBar === "contact" && <Contacto/>
          }
          </>
        }
      </Panel>
      {showModal && <Modal src={video} changeShowModal={changeShowModal}/>}
    </section>
  );
}