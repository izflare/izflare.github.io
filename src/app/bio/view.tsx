import * as React from "react";
import * as CONST from "./../../constants";
import { positions } from "./../../assets/personal/position";
import { certs } from "./../../assets/personal/certs";
import { compDate, dtw, ptsW, ptsE } from "./../../utils/date";
import { Education } from "./education";
import c from "./view.scss";

export const Bio: React.FC<{}> = () => {

  const experienceList = positions.sort((a, b) => compDate(a.period.from, b.period.from));
  const certList = certs;

  return (
    <div className={c.wrapper}>

      <div className={c.container}>
        <h1>Bio</h1>

        <section>
          <h2>Experience</h2>
          <hr />
          <ul>{
            experienceList.map((e, i) => {
              return (
                <li key={i}>
                  <p>{e.affiliation.name.ja} {e.status.ja}</p>
                  <p className={c.sub}>{e.status.en} at {e.affiliation.name.en}</p>
                  <p className={c.small}>{ptsW(e.period)}（{ptsE(e.period)}）</p>
                </li>
              );
            })
          }</ul>
        </section>

        <Education />

        <section>
          <h2>Certifications</h2>
          <hr />
          <ul className={c.cert}>{
            certList.map((e, i) => {
              return (
                <li key={i}>
                  <p>{e.name}（{e.org}，{dtw(e.at)}年）</p>
                </li>
              );
            })
          }</ul>
        </section>

      </div>
    </div>
  );
};


