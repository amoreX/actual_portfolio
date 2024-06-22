import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import About from "./about.jsx";
export default function Page({ trans, homeclick, pagescale }) {
  const [curr, setCurr] = useState("About Me");
  const ind = ["Content", "About Me", "Tech Stack", "Projects", "Contact"];
  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div
      id="page-container"
      style={{ transform: `translateY(${trans}) scale(${pagescale})` }}
    >
      <div id="bars-container">
        <div id="index">
          {ind.map((content, index) => {
            return (
              <motion.div
                id="each-content"
                style={{
                  color:
                    content == curr || content == "Content" ? "white" : "grey",
                  cursor: content == "Content" ? "default" : "pointer",
                }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ type: "tween", delay: 1.5, duration: 0.38 }}
                animate={{ opacity: 1, x: index % 2 == 0 ? -50 : 50 }}
                onClick={() => setCurr(content)}
              >
                {content}
                {curr == content && curr != "Content" && (
                  <motion.div
                    id="underline"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  ></motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        <div id="bars">
          <motion.div
            id="bar"
            animate={{ rotate: "45deg", y: -90, x: -36 }}
            transition={{ type: "tween", delay: 1.2, duration: 0.38 }}
          ></motion.div>
          <motion.div
            id="bar"
            animate={{ rotate: "45deg", y: 90, x: 36, scale: 1.05 }}
            transition={{ type: "tween", delay: 1.2, duration: 0.38 }}
          ></motion.div>
        </div>
      </div>
      <motion.div
        id="content-container"
      >
        {curr=="About Me"?<About /> : null}
      </motion.div>
      <motion.div
        id="cross"
        initial={{ scale: 0.1 }}
        transition={{type: "tween", delay:2.5,duration:0.38}}
        animate={{ scale: 1 }}
        onClick={() => homeclick()}
      >
        {cross}
      </motion.div>
    </div>
  );
}
