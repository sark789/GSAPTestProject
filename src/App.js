import React, { useEffect, useState } from "react";
import GlobalStyle from "../src/styles/globalStyle";
import { ScrollerProvider } from "./utils/ScrollerContext";
import isTouchDevice from "../src/utils/isTouchDevice";
import InitSmoothScroll from "./utils/InitSmoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestComponent from "./TestComponent";

function App() {
  const [scroller, setScroller] = useState(null);
  useEffect(() => {
    //init smooth scroll
    if (!isTouchDevice()) {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });

      setScroller(InitSmoothScroll(1));
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
