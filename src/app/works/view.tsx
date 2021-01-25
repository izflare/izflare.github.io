import * as React from "react";
import { awards } from "./../../assets/works/awards";
import { compDate, dtw } from "./../../utils/date";
import { Publications } from "./publications";
import { Talks } from "./talks";
import c from "./view.scss";

export const Works: React.FC<{}> = () => {

  const awardList = awards.sort((a, b) => compDate(a.at, b.at));

  return (
    <div className={c.wrapper}>

      <div className={c.container}>
        <h1>Works</h1>

        <Publications />

        <Talks />

        <section>
          <h2>Awards</h2>
          <hr />
          <ol>{
            awardList.map((e, i) => {
              return (
                <li key={i}>
                  <p>{e.name}</p>
                  <p className={c.small}>{dtw(e.at)}年（{String(e.at.y)}年）{String(e.at.m)}月 {String(e.at.d)}日</p>
                </li>
              );
            })
          }</ol>
        </section>

      </div>
    </div>
  );
};


