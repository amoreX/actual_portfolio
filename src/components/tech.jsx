import { motion } from "framer-motion";
import "./comp.scss";
export default function Tech() {
  const lines = ["Html", "Css / Tailwind / Sass","Javascript","React","NextJs", "MongoDb","Astro","Python","Figma"];
  return (
    <div id="tech-container">
      <span id="tech-title">
        <motion.span
          initial={{ opacity: 0, y: 56 }}
          transition={{ type: "tween", delay: 0.5, duration: 0.29 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tech
        </motion.span>
        <motion.span
          id="under-tech"
          initial={{ width: "0%" }}
          transition={{ type: "tween", delay: 1 }}
          animate={{ width: "100%" }}
        ></motion.span>
      </span>
      <span id="content-tech">
        {lines.map((line, index) => {
          return (
            <>
              <motion.div id="actual-line-tech" 
              initial={{ x: index%2==0?-200:200, opacity: 0 }}
              transition={{type:"tween",delay:1+index*0.2,duration:0.38}}
              animate={{ x: 0, opacity: 1 }}
              
              >
                
                {line}
              </motion.div>
            </>
          );
        })}
      </span>
    </div>
  );
}
