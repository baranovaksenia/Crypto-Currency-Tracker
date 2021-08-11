import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinData from "../components/CoinData";
import HistoryChart from "../components/HistoryChart";
import coinGecko from "../api/coinGecko";

export default function CoinDetailPage() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: day.data.prices,
        week: week.data.prices,
        year: year.data.prices,
        detail: detail.data[0],
      });
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderData = () => {
    return (
      <div className="coinlist">
        <HistoryChart />
        <CoinData />
      </div>
    );
  };
  return <div>{renderData}</div>;
}
