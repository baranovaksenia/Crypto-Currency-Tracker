import React, { useState, useEffect, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";

export default function CoinList() {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(true);
  console.log(watchList);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };
  return <div>{renderCoins()}</div>;
}
