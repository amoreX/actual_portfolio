import { motion } from "framer-motion";
import { useState } from "react";
import "./comp.scss";

export default function Project() {
  const [hovWpm, setHovwpm] = useState(false);
  const [hovWeather, setHovweather] = useState(false);
  const [hovgit, setHovgit] = useState(false);
  const [hovtwit, setHovtwit] = useState(false);
  const handlewpmenter = () => {
    setHovwpm(true);
  };
  const handleweatherenter = () => {
    setHovweather(true);
  };
  const handlegitenter = () => {
    setHovgit(true);
  };
  const handletwitenter = () => {
    setHovtwit(true);
  };
  const handlewpmleave = () => {
    setHovwpm(false);
  };
  const handletwitleave = () => {
    setHovtwit(false);
  };
  const handleweatherleave = () => {
    setHovweather(false);
  };
  const handlegitleave = () => {
    setHovgit(false);
  };
  const handleclick=(n)=>{
    if(n==1){
        window.open("https://wpmeter.vercel.app", "_blank");
    }
    if(n==2){
        window.open("https://weather-app-taupe-sigma.vercel.app", "_blank");
    }
    if(n==3){
        window.open("https://getitdone-theta.vercel.app", "_blank");
    }
    if(n==4){
        window.open("https://twit-clone-coral.vercel.app", "_blank");
    }
  }
  return (
    <div id="proj-container">
      <div id="proj-title">
        <motion.span
          initial={{ opacity: 0, y: 56 }}
          transition={{ type: "tween", delay: 0.5, duration: 0.29 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.span>
        <motion.span
          id="under-proj"
          initial={{ width: "0%" }}
          transition={{ type: "tween", delay: 1 }}
          animate={{ width: "100%" }}
        ></motion.span>
      </div>
      <div id="projects">
        <motion.span id="each-proj">
          <motion.span id="proj-pic" onClick={()=>handleclick(1)}>
          {hovWpm ? (
              <video autoPlay loop muted onMouseLeave={handlewpmleave}>
                <source src="/wpmvid.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/wpmimg.png"
                alt="img"
                onMouseEnter={handlewpmenter}
              />
            )}
          </motion.span>
          {hovWpm==true?
          <motion.span id="proj-def">
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.2}}animate={{y:0,opacity:1}}>Monkey Type Clone</motion.span>
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.6}}animate={{y:0,opacity:1}}>(with themes)</motion.span>
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:1}}animate={{y:0,opacity:1}}>React +  Sass</motion.span>
            

          </motion.span>
          :
          null
        }
        </motion.span>
        
        <motion.span id="each-proj">
          <motion.span id="proj-pic" onClick={()=>handleclick(2)}>
          {hovWeather ? (
              <video autoPlay loop muted onMouseLeave={handleweatherleave}>
                <source src="/weathervid.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/weatherimg.png"
                alt="img"
                onMouseEnter={handleweatherenter}
              />
            )}
          </motion.span>
          {hovWeather==true?
          <motion.span id="proj-def">
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.2}}animate={{y:0,opacity:1}}>Weather App</motion.span>
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.6}}animate={{y:0,opacity:1}}>React + Sass + WeatherAPI</motion.span>
            

          </motion.span>
          :
          null
        }
        </motion.span>

        <motion.span id="each-proj">
          <motion.span id="proj-pic" onClick={()=>handleclick(3)}>
          {hovgit ? (
              <video autoPlay loop muted onMouseLeave={handlegitleave}>
                <source src="/gitvid.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/gitimg.png"
                alt="img"
                onMouseEnter={handlegitenter}
              />
            )}
          </motion.span>
          {hovgit==true?
          <motion.span id="proj-def">
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.2}}animate={{y:0,opacity:1}}>GetItDone</motion.span>
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.4}}animate={{y:0,opacity:1}}>A googled authenticated ToDoList</motion.span>
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.6}}animate={{y:0,opacity:1}}>NextJs+ Sass + MongoDB</motion.span>
            

          </motion.span>
          :
          null
        }
        </motion.span>
        <motion.span id="each-proj">
          <motion.span id="proj-pic" onClick={()=>handleclick(4)}>
          {hovtwit ? (
              <video autoPlay loop muted onMouseLeave={handletwitleave}>
                <source src="/twitvid.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/twitimg.png"
                alt="img"
                onMouseEnter={handletwitenter}
              />
            )}
          </motion.span>
          {hovtwit==true?
          <motion.span id="proj-def">
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.2}}animate={{y:0,opacity:1}}>Twitter Clone</motion.span>
            <motion.span initial={{y:10,opacity:0}} transition={{type:"tween",duration:0.28,delay:0.4}}animate={{y:0,opacity:1}}>React+ Sass + Node + MongoDB</motion.span>
            

          </motion.span>
          :
          null
        }
        </motion.span>
        
      </div>
    </div>
  );
}
