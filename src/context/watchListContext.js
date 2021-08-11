import React, { useState, createContext } from "react";

//create context object
export const WatchListContext = createContext();

// create context provider component
export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple"]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
