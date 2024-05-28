import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import './App.css'
import { Navbar,Exchanges,Cryptocurrencies,CryptoDetails,News } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/">
<Homepage/>
              </Route>
              <Route exact path="/exchanges">
<Exchanges/>
              </Route>
              <Route exact path="/cryptocurrencies">
<Cryptocurrencies/>
              </Route>
              <Route exact path="/crypto/:coinId">
<CryptoDetails/>
              </Route>
              <Route exact path="/news">
<News/>
              </Route>
              
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
