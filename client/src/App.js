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
                <Restaurant restaurantName="asiana" lat="44.4779367" lon="-73.2123951" />
              </div>
            )
          }} />
          {/* component is passed the restaurants name as a prop, so it can fetch the appropriate data */}
          <Route path="/restaurants/henry's-diner" component={() => {
            return(
              <div>
                <Restaurant restaurantName="henry's-diner" lat="44.478007399999996" lon="-73.21351552613982"/>
              </div>
            )
          }} />
          <Route path="/restaurants/el-cortijo" component={() => {
            return(
              <div>
                <Restaurant restaurantName="el-cortijo" lat="44.4780989" lon="-73.2120088"/>
              </div>
            )
          }} />
          <Route path="/restaurants/farmhouse" component={() => {
            return(
              <div>
                <Restaurant restaurantName="farmhouse" lat="44.47840574999999" lon="-73.21329562432919"/>
              </div>
            )
          }} />
          <Route path="/restaurants/kountry-kart" component={() => {
            return(
              <div>
                <Restaurant restaurantName="kountry-kart" lat="44.4757719" lon="-73.2129392"/>
              </div>
            )
          }} />
          <Route path="/restaurants/sherpa-kitchen" component={() => {
            return(
              <div>
                <Restaurant restaurantName="sherpa-kitchen" lat=" 44.4768716" lon="-73.2151128"/>
              </div>
            )
          }} />
          <Route path="/restaurants/skinny-pancake" component={() => {
            return(
              <div>
                <Restaurant restaurantName="skinny-pancake"lat="44.4770114" lon="-73.2195093" />
              </div>
            )
          }} />
          <Route
            path="/restaurants/manhattan-pizza"
            component={() => {
              return(
                <div>
                  <Restaurant restaurantName="manhattan-pizza" lat=" 44.4757786" lon="-73.2126578"/>
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
