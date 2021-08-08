import React, { useState, createContext } from "react";

//create context object
export const WatchListContext = createContext();

// create context provider component
export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple"]);
  return (
    <WatchListContext.Provider value={{ watchList }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
