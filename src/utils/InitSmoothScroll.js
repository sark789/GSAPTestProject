import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function InitSmoothScroll(smoothness) {
  // this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text)
  function smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    console.log("initing");
    gsap.set(viewport || content.parentNode, {
      overflow: "hidden",
      position: "fixed",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      height;

    function onResize() {
      height = content.clientHeight;
      document.body.style.height = height + "px";
    }
    onResize();
    ScrollTrigger.addEventListener("refreshInit", onResize);

    ScrollTrigger.defaults({ scroller: content });

    ScrollTrigger.prototype.update = (p) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
        return arguments.length ? setProp(-value) : -getProp("y");
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    var scroller = gsap.fromTo(
      content,
      { y: 0 },
      {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update,
        scrollTrigger: {
          scroller: window,
          invalidateOnRefresh: true,
          start: 0,
          refreshPriority: -1,
          id: "scroller",
          end: () => height - document.documentElement.clientHeight,
          scrub: smoothness || 1,
          onRefresh: (self) => {
            // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
            gsap.killTweensOf(self.animation);
            self.animation.progress(self.progress);
          },
        },
      }
    );

    return scroller.scrollTrigger;
  }

  return smoothScroll("#content", "#viewport", smoothness);
}

export default InitSmoothScroll;
