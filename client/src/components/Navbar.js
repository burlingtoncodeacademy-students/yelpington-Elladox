import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
      /* div for the navbar container */
    <div id="navContainer">
        {/* div containing all the links */}
      <div id="navLinks">
          {/* each link send the user to the specified path */}
        <NavLink activeClassName="active" exact to="/">
           {/* active classname helps with styling for the link that was clicked last */}
          <h3 className="navContent">Home</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/asiana">
          <h3 className="navContent">Asiana</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/el-cortijo">
          <h3 className="navContent">El-Cortijo</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/farmhouse">
          <h3 className="navContent">Farmhouse</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/henry's-diner">
          <h3 className="navContent">Henry's Diner</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/kountry-kart">
          <h3 className="navContent">Kountry Kart</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/sherpa-kitchen">
          <h3 className="navContent">Sherpa Kitchen</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/skinny-pancake">
          <h3 className="navContent">Skinny Pancake</h3>
        </NavLink>
        <NavLink activeClassName="active" to="/restaurants/manhattan-pizza">
          <h3 className="navContent">Manhattan Pizza</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
