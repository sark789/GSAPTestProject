import React, { createContext, useContext } from "react";

export const ScrollerContext = createContext();

export function useScroller() {
  return useContext(ScrollerContext);
}

export function ScrollerProvider({ children, scrollerInstance }) {
  return (
    <ScrollerContext.Provider value={scrollerInstance}>
      {children}
    </ScrollerContext.Provider>
  );
}
