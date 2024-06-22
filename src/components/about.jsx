import { motion } from "framer-motion";
import "./comp.scss";
export default function About() {
  const lines = ["Aspiring Web Developer", "Grinding DSA","Love to Design Sites","Getting into AI","Open to work", "Undergrad at CMRIT,BLR - 8.0 CGPA"];
  return (
    <div id="about-container">
      <span id="title">
        <motion.span
          initial={{ opacity: 0, y: 56 }}
          transition={{ type: "tween", delay: 1.5, duration: 0.29 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.span>
        <motion.span
          id="under"
          initial={{ width: "0%" }}
          transition={{ type: "tween", delay: 2 }}
          animate={{ width: "100%" }}
        ></motion.span>
      </span>
      <span id="content">
        {lines.map((line, index) => {
          return (
            <>
              <motion.div id="actual-line" 
              initial={{ y: 20, opacity: 0 }}
              transition={{type:"tween",delay:2+index*0.4,duration:0.38}}
              animate={{ y: 0, opacity: 1 }}
              
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
