import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";

export default function CoinSummaryPage() {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      {/* <AddCoin /> */}
      <CoinList />
    </div>
  );
}
