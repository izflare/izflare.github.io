import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as CONST from "./../../constants";
import { positions } from "./../../assets/personal/position";
import c from "./view.scss";
import * as ICON from "../icons";

export const Home: React.FC<{}> = () => {

  const redirect = sessionStorage.getItem("redirect");
  if (redirect) {
    for (const location of CONST.LOCATIONS) {
      if (redirect === location) { // match the value stored by 404 to the SPA loc
        const history = useHistory();
        history.push(redirect); // set the loc to the top of the history stack
      };
    }
    sessionStorage.removeItem("redirect");
  }

  const currentPositionList = positions.filter(e => {
    if (!e.period.to) return e;
  });

  const accountList = [
  {icon: ICON.github,     href: CONST.accounts.github     },
  {icon: ICON.orcid,      href: CONST.accounts.orcid      },
  {icon: ICON.qiita,      href: CONST.accounts.qiita      },
  {icon: ICON.speakerdeck,href: CONST.accounts.speakerdeck},
];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.getElementById("main")!.scroll(0, 0);
  }, [])

  return (
    <div className={c.wrapper}>

      <div className={c.container}>
        <section>
          <h2>About</h2>
          <hr />
          <p>The personal website of Isamu Furuya.</p>
        </section>

        <section>
          <h2>Author</h2>
          <hr />
          <p>古谷 勇（Isamu FURUYA, Ph.D.）</p>
          <div className={c.contact}>
            <div onClick={() => setOpen(!open)}>
              <a>{ICON.email}</a>
              {open && <>
                <div className={c.mask} />
                <div className={c.callout} onClick={e => e.stopPropagation()}>
                  {CONST.accounts.email}
                </div>
              </>}
            </div>
            {accountList.map((e, i) => {return(
              <div key={i}>
                <a href={e.href} target="_blank" rel="noopener noreferrer">{e.icon}</a>
              </div>
            );})}
          </div>

          <h3>Current Position</h3>
          <ul>{
            currentPositionList.map((e, i) => {
              return (
                <li key={i}>
                  <p>{e.affiliation.name.ja} {e.status.ja}</p>
                  <p className={c.sub}>{e.status.en} at {e.affiliation.name.en}</p>
                </li>
              );
            })
          }</ul>

          <h3>Research Fields</h3>
          <p>Algorithms, Data Structures, String Data Processing, Lossless Data Compression</p>
        </section>

      </div>
    </div>
  );
};

