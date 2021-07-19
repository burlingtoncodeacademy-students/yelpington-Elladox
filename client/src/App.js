import "./App.css";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Asiana from "./components/Asiana";
import HenrysDiner from "./components/Henry's-diner";
import ElCortijo from "./components/El-cortijo";
import Farmhouse from "./components/Farmhouse";
import KountryKart from "./components/Kountry-kart";
import SherpaKitchen from "./components/Sherpa-kitchen";
import SkinnyPancake from "./components/Skinny-pancake";
import ManhattanPizza from "./components/ManhattanPizza";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
          <Route path="/restaurants/asiana" component={Asiana} />
          <Route path="/restaurants/henry's-diner" component={HenrysDiner} />
          <Route path="/restaurants/el-cortijo" component={ElCortijo} />
          <Route path="/restaurants/farmhouse" component={Farmhouse} />
          <Route path="/restaurants/kountry-kart" component={KountryKart} />
          <Route path="/restaurants/sherpakitchen" component={SherpaKitchen} />
          <Route path="/restaurants/skinny-pancake" component={SkinnyPancake} />
          <Route
            path="/restaurants/manhattan-pizza"
            component={ManhattanPizza}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
