import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

export default function App() {
  return (
    <>
      <div className="container">
        <WatchListContextProvider>
          <BrowserRouter>
            <Header />
            <Route path="/" exact component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage} />
          </BrowserRouter>
        </WatchListContextProvider>
      </div>
    </>
  );
}
