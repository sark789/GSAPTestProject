import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroller } from "./utils/ScrollerContext";
gsap.registerPlugin(ScrollTrigger);
const TestComponent = () => {
  const containerRef = useRef();

  const scrollerInstance = useScroller();
  useEffect(() => {
    if (scrollerInstance) {
      ScrollTrigger.create({
        invalidateOnRefresh: true,
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scroller: "#content",
        id: "pin-landing-pic",
        markers: true,
      });
    }
  }, [scrollerInstance]);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          backgroundColor: "red",
          height: "1000px",
          zIndex: "-1",
          fontSize: "100px",
        }}
      >
        Some title
      </div>
      <div style={{ backgroundColor: "green", height: "100vh" }}></div>
    </>
  );
};

export default TestComponent;
