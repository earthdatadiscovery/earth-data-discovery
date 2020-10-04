import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import { StoreContext } from "../../store/index";

export default function Router() {
  const { state } = React.useContext(StoreContext);

  React.useEffect(() => {
    if (state?.timezone.split("/")[0] === "America") {
      window.location.href = "https://us.earthdatadiscovery.co";
      return null;
    }
  }, [state.timezone]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route render={() => <h1>Not found!</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
