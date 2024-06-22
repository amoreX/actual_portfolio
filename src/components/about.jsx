import { motion } from "framer-motion";
import { useState } from "react";
import "./comp.scss";
export default function About() {
  const [modal, setModal] = useState(false);
  const[op,setOp]=useState(0);
  const lines = [
    "Aspiring Web Developer",
    "Grinding DSA",
    "Love to Design Sites",
    "Getting into AI",
    "Open to work",
    "Undergrad at CMRIT,BLR - 8.0 CGPA",
    "Contact Me?",
    "Mail: rahmannihal72@gmail.com",
    "X: @nihaliscoding",
    "LinkedIn: /in/nihal-is-coding",
  ];
  const handleclick = (i) => {
    if (i == 7) {
      navigator.clipboard.writeText("rahmannihal72@gmail.com");
      setModal(true);
      setOp(1);
      setTimeout(()=>{
        setOp(0);
      },1500)
    }
    if (i == 8) {
      window.open("https://x.com/nihaliscoding", "_blank");
    }
    if (i == 9) {
      window.open("https://www.linkedin.com/in/nihal-is-coding/", "_blank");
    }
  };
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
              <motion.div
                id="actual-line"
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  type: "tween",
                  delay: 2 + index * 0.2,
                  duration: 0.38,
                }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                  scale: index > 6 ? 0.8 : 1,
                  marginTop: index == 6 ? "50px" : null,
                  cursor: index > 6 ? "pointer" : "default",
                }}
                onClick={() => handleclick(index)}
              >
                {line}
              </motion.div>
            </>
          );
        })}
      </span>
      {modal && (
        <motion.div
          id="mail-copied"
          initial={{ y: 30, opacity: 0 }}
          tranistion={{ type: "tween", duration: 0.38 }}
          animate={{ y: 0, opacity: op }}
        >
          Mail Copied!
        </motion.div>
      )}
    </div>
  );
}
