import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Page({ trans }) {
  const [curr, setCurr] = useState("About Me");
  const ind = ["Content", "About Me", "Tech Stack", "Projects", "Contact"];

  return (
    <div id="page-container" style={{ transform: `translateY(${trans})` }}>
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
                transition={{ type: "tween", delay: 2, duration: 0.38 }}
                animate={{ opacity: 1, x: index % 2 == 0 ? -50 : 50 }}
                onClick={() => setCurr(content)}
              >
                {content}
                {curr == content && curr!="Content" && (
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
            animate={{ rotate: "45deg", y: -90, x: -20 }}
            transition={{ type: "tween", delay: 1.6, duration: 0.38 }}
          ></motion.div>
          <motion.div
            id="bar"
            animate={{ rotate: "45deg", y: 90, x: 20 }}
            transition={{ type: "tween", delay: 1.6, duration: 0.38 }}
          ></motion.div>
        </div>
      </div>
      <motion.div
        id="content-container"
        initial={{ opacity: 0, y: 56 }}
        transition={{ type: "tween", delay: 3.5, duration: 0.29 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Content soon
      </motion.div>
    </div>
  );
}
