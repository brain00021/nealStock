import logo from "./logo.svg";
import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import StockItem from "./components/StockItems.js";

function App() {
  const [stockData, setStockData] = useState({});
  useEffect(() => {
    fetch("http://35.225.145.165/api/update_monitor", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStockData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const StockColumn = ({ title, data = [] }) => {
    return (
      <div className="stockColumn">
        <h4 className="bg-light">{title}</h4>

        {data.map((item) => {
          return <StockItem item={item} />;
        })}
      </div>
    );
  };
  const { amount_rank, n_attack, p_attack, pmom_stocks, top_mv, nmom_stocks } =
    stockData;

  return (
    <div className="App d-flex  flex-column" style={{ minHeight: "100vh" }}>
      <header className="container-fluid flex-grow-1">
        <div className="row  d-flex justify-content-around">
          <div className="col-2 card appColumnWrapper">
            <StockColumn title={"成值排行"} data={amount_rank}></StockColumn>
          </div>
          <div className="col-2 card appColumnWrapper">
            <StockColumn title={"正族群"} data={pmom_stocks}></StockColumn>
          </div>
          <div className="col-2 card appColumnWrapper">
            <StockColumn title={"負族群"} data={nmom_stocks}></StockColumn>
          </div>
          <div className="col-2 card appColumnWrapper">
            <StockColumn title={"負族群"} data={nmom_stocks}></StockColumn>
          </div>
        </div>
      </header>
      <div className="container-fluid " style={{ flexGrow: 2 }}>
        <div
          className="row d-flex justify-content-around align-items-stretch"
          style={{ minHeight: 1 }}
        >
          <div className="col-3 card">test</div>
          <div className="col-3 card">test2</div>
          <div className="col-3 card">test3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
