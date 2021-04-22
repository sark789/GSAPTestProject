import React, { useEffect, useState } from "react";
import GlobalStyle from "../src/styles/globalStyle";
import { ScrollerProvider } from "./utils/ScrollerContext";
import isTouchDevice from "../src/utils/isTouchDevice";
import InitSmoothScroll from "./utils/InitSmoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestComponent from "./TestComponent";
import _ from "lodash";

function App() {
  const [scroller, setScroller] = useState(null);
  const onResizeHandler = () => {
    var height = document.getElementById("content").offsetHeight;
    document.body.style.height = height + "px";
  };

  useEffect(() => {
    //init smooth scroll
    if (!isTouchDevice()) {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      setScroller(InitSmoothScroll());
    }
    if (isTouchDevice) {
      window.addEventListener("resize", _.debounce(onResizeHandler, 800));
      return () => {
        window.removeEventListener("resize", _.debounce(onResizeHandler, 800));
      };
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <div id="viewport">
        <div id="content">
          <ScrollerProvider scrollerInstance={scroller}>
            <TestComponent />
          </ScrollerProvider>
        </div>
      </div>
    </>
  );
}

export default App;
