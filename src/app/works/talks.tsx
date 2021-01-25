import * as React from "react";
import { talks } from "./../../assets/works/talks";
import { compDate, dts, dtsE } from "./../../utils/date";
import c from "./talks.scss";

export const Talks: React.FC<{}> = () => {

  // lists
  const talkList = talks.sort((a, b) => compDate(a.at, b.at));

  // snips for rendering
  const je = (l: string, j: string, e: string) => l === "ja" ? j : e;
  const renderAuthors = (authors: string[], lang: string) => 
    <p className={c.author}>{authors.map((name, j) => {
      if (j === authors.length - 1) { // the last one
        return (<span key={j}>{j !== 0 && lang !== "ja" && "and "}{name}</span>);
      } else { // otherwise
        return (<span key={j}>{name}{lang === "ja" ? "，" : ", "}</span>);
      };
  })}{lang === "ja" ? "：" : ":"}</p>;

  return (

    <section className={c.talks}>
      <h2>Talks / Presentations</h2>
      <hr />

      <ol>{
        talkList.map((e, i) => {
          return (
            <li key={i}>
              {renderAuthors(e.author, e.lang)}
              <p className={c.title}>{e.title}</p>
              <p className={c.sub}>
                {e.event}
                {je(e.lang, "，" + dts(e.at) + "．", ", " + dtsE(e.at) + ".")}
              </p>
            </li>
          );
        })
      }</ol>

    </section>

  );
};



