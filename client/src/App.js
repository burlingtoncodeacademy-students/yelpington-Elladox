import "./App.css";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Restaurant from "./components/Restaurant";

function App() {
  return (
    /* Browser Router set up for SPA functionality */
    <BrowserRouter>
     {/* Header and navar is consistent throughout the website */}
      <div id="pageHead">
        <Header />
        <Navbar />
      </div>
      <div id="mainBody">
        {/* main body of the page changes based on the path */}
        <Switch>
          {/* use exact path for the home page */}
          <Route exact path="/" component={Home} />
          {/* paths for all the other restaurants */}
          <Route path="/restaurants/asiana" component={() => {
            return(
              <div>
                <Restaurant restaurantName="asiana" />
              </div>
            )
          }} />
          {/* component is passed the restaurants name as a prop, so it can fetch the appropriate data */}
          <Route path="/restaurants/henry's-diner" component={() => {
            return(
              <div>
                <Restaurant restaurantName="henry's-diner" />
              </div>
            )
          }} />
          <Route path="/restaurants/el-cortijo" component={() => {
            return(
              <div>
                <Restaurant restaurantName="el-cortijo" />
              </div>
            )
          }} />
          <Route path="/restaurants/farmhouse" component={() => {
            return(
              <div>
                <Restaurant restaurantName="farmhouse" />
              </div>
            )
          }} />
          <Route path="/restaurants/kountry-kart" component={() => {
            return(
              <div>
                <Restaurant restaurantName="kountry-kart" />
              </div>
            )
          }} />
          <Route path="/restaurants/sherpa-kitchen" component={() => {
            return(
              <div>
                <Restaurant restaurantName="sherpa-kitchen" />
              </div>
            )
          }} />
          <Route path="/restaurants/skinny-pancake" component={() => {
            return(
              <div>
                <Restaurant restaurantName="skinny-pancake" />
              </div>
            )
          }} />
          <Route
            path="/restaurants/manhattan-pizza"
            component={() => {
              return(
                <div>
                  <Restaurant restaurantName="manhattan-pizza" />
                </div>
              )
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
