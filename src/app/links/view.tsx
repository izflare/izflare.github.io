import * as React from "react";
import * as CONST from "./../../constants";
import * as AFF from "./../../assets/affiliation";
import c from "./view.scss";

export const Links: React.FC<{}> = () => {

  const affiliationList = [AFF.ikn, AFF.jsps, AFF.dsmsp, AFF.crest, AFF.gsb, AFF.hgu];

  return (
    <div className={c.wrapper}>

      <div className={c.container}>
        <h1>Links</h1>

        <section>
          <h2>Previous and Current Affiliation</h2>
          <hr />
          <ul>{
            affiliationList.map((e, i) => {
              return (
                <li key={i}>
                  <p>
                    <a href={e.link.ja} target="_blank" rel="noopener noreferrer">
                      {e.name.ja}
                    </a>
                  </p>
                  <p className={c.sub}>
                    <a href={e.link.en} target="_blank" rel="noopener noreferrer">
                      {e.name.en}
                    </a>
                  </p>
                </li>
              );
            })
          }</ul>
        </section>

      </div>
    </div>
  );
};

