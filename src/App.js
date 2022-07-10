import React from "react";
import classes from "./app.module.scss"
import "./shared/styles/_responsive.module.scss"
import {
  Route,
  useLocation,
} from "react-router-dom";
import routes from "./router/routes";

function App() {
const location = useLocation()
const renderRoutes = routes.map((route)=>  <Route key={route.path} {...route}  />)


  return (
    <div className={classes.app}>
      <h2>Ricky Morty Wiki</h2>
      <h3>{location.pathname === "/" ? "List of Characters" : "Detail information"}</h3>
      <div className={classes.app_layout}>
      {renderRoutes}
      </div>
    </div>
  );
}

export default App;
