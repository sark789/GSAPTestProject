import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroller } from "./utils/ScrollerContext";
import { Wrapper1, Wrapper2 } from "./TestComponentElements";
gsap.registerPlugin(ScrollTrigger);
const TestComponent = () => {
  const containerRef = useRef();

  const scrollerInstance = useScroller();
  useEffect(() => {
    if (scrollerInstance) {
      gsap.fromTo(
        ".something",
        { y: 0 },
        {
          scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: ".something",
            start: "top top",
            pin: true,
            pinSpacing: false,
            scroller: "#content",
            id: "pin-landing-pic",
            markers: true,
            refreshPriority: 1,
          },
        }
      );
    }
  }, [scrollerInstance]);

  return (
    <>
      <Wrapper1 className="something">Some title</Wrapper1>
      <Wrapper2></Wrapper2>
    </>
  );
};

export default TestComponent;
