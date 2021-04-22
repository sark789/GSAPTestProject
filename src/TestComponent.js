import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroller } from "./utils/ScrollerContext";
import {
  InnerWrapper,
  OutterWrapper,
  Wrapper1,
  Wrapper2,
} from "./TestComponentElements";
gsap.registerPlugin(ScrollTrigger);
const TestComponent = () => {
  const itemRef = useRef();
  const outterContainerRef = useRef();
  const scrollerInstance = useScroller();

  useEffect(() => {
    if (scrollerInstance) {
      var tl = gsap.timeline({
        scrollTrigger: {
          scroller: "#content",
          trigger: itemRef.current,
          start: () => `top+=${outterContainerRef.current.offsetHeight} bottom`,
          end: () => `+=${outterContainerRef.current.offsetHeight}`,
          scrub: true,
          invalidateOnRefresh: true,
          id: "footer-fade-in",
          markers: true,
        },
      });

      tl.fromTo(
        itemRef.current,
        {
          y: () => -outterContainerRef.current.offsetHeight,
        },
        {
          y: 0,
        }
      );
    }
  }, [scrollerInstance]);

  return (
    <>
      <Wrapper1></Wrapper1>
      <Wrapper2 ref={outterContainerRef} style={{ overflow: "hidden" }}>
        <OutterWrapper ref={itemRef}>
          <InnerWrapper>Neki Neki</InnerWrapper>
          <InnerWrapper>Neki Neki</InnerWrapper>
        </OutterWrapper>
      </Wrapper2>
    </>
  );
};

export default TestComponent;
