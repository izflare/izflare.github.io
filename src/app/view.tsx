import * as React from "react";
import { BrowserRouter, Switch, Route, Link, useLocation } from "react-router-dom";
import * as CONST from "./../constants";
import { Home } from "./home/view";
import { Works } from "./works/view";
import { Bio } from "./bio/view";
import { Links } from "./links/view";
import c from "./view.scss";

const routingList = [
  {title: "Top",    url: CONST.LOC_HOME,  comp: <Home />},
  {title: "Works",  url: CONST.LOC_WORKS, comp: <Works />},
  {title: "Bio",    url: CONST.LOC_BIO,   comp: <Bio />},
  {title: "Links",  url: CONST.LOC_LINKS, comp: <Links />},
];

const Navigation: React.FC<{}> = () => {

  const location = useLocation(); // current loc
  const nav = routingList.map((e, i) => {
    // nav btn is highlighted if the corresponding page is currently previewed
    if (e.url === location.pathname) {
      return (<Link key={i} className={c.on} to={e.url}>{e.title}</Link>);
    } else {
      return (<Link key={i} to={e.url}>{e.title}</Link>);
    }
  });

  return (<nav>{nav}</nav>);

};

export const App: React.FC<{}> = () => {

  // main content area following SPA routing
  const routes = routingList.map((e, i) => {
    return (<Route key={i} exact path={e.url}>{e.comp}</Route>);
  });

  return (
    <div className={c.app}>
    <BrowserRouter>
      <header>
        <Link to={CONST.LOC_HOME}>
          <h1>Isamu Furuya</h1>
        </Link>

        <Navigation />
      </header>

      <div className={c.wrapper} id="main">
        <main>
          <Switch>
            <Route exact path={CONST.LOC_HOME}><Home /></Route>
            {routes}
          </Switch>
        </main>
        <footer>2021 &copy; Isamu Furuya</footer>
      </div>
    </BrowserRouter>
    </div>
  );
};

