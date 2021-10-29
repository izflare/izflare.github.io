import * as React from "react";
import { journals } from "./../../assets/works/publications/journals";
import { reviewed, nonReviewed } from "./../../assets/works/publications/proceedings";
import { compDate, dts, dtsE } from "./../../utils/date";
import c from "./publications.scss";

export const Publications: React.FC<{}> = () => {

  // lists
  const journalList = journals.sort((a, b) => compDate(a.at, b.at));
  const reviewedList = reviewed.sort((a, b) => compDate(a.at, b.at));
  const nonReviewedList = nonReviewed.sort((a, b) => compDate(a.at, b.at));

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
  const renderTitle = (title: string, link: string | null) => 
    <p className={c.title}>
      {link ?
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      : // no link
        {title}
      }
    </p>;
  const renderPages = (p: {from: string; to: string;}) => 
    p.from === p.to ? "page " + p.from : "pages " + p.from + " - " +  p.to;

  return (

    <section className={c.publications}>
      <h2>Publications</h2>
      <hr />

      <h3>Journal Papers (Peer Reviewed)</h3>
      <ol>{
        journalList.map((e, i) => {
          return (
            <li key={i}>
              {renderAuthors(e.author, e.lang)}
              {renderTitle(e.title, e.link)}
              <p className={c.sub}>
                {e.journal}
                {e.volume && je(e.lang, "，", ", vol. ") + e.volume}
                {e.number && je(e.lang, "，no. ", ", no. ") + e.number}
                {je(e.lang, "，", ", ") + e.publisher}
                {e.pages && je(e.lang, "，", ", ") + renderPages(e.pages)}
                {je(e.lang, "，" + dts(e.at) + "．", ", " + dtsE(e.at) + ".")}
              </p>
            </li>
          );
        })
      }</ol>

      <h3>Proceedings (Peer Reviewed)</h3>
      <ol>{
        reviewedList.map((e, i) => {
          return (
            <li key={i}>
              {renderAuthors(e.author, e.lang)}
              {renderTitle(e.title, e.link)}
              <p className={c.sub}>
                {je(e.lang, "", "In ")}{e.booktitle}
                {e.volume && je(e.lang, "，", ", vol. ") + e.volume}
                {e.number && je(e.lang, "，no. ", ", no. ") + e.number}
                {e.series && " of " + e.series}
                {je(e.lang, "，", ", ") + e.publisher}
                {e.pages && je(e.lang, "，", ", ") + renderPages(e.pages)}
                {je(e.lang, "，" + dts(e.at) + "．", ", " + dtsE(e.at) + ".")}
              </p>
            </li>
          );
        })
      }</ol>

      <h3>Proceedings (Non-Peer Reviewed)</h3>
      <ol>{
        nonReviewedList.map((e, i) => {
          return (
            <li key={i}>
              {renderAuthors(e.author, e.lang)}
              {renderTitle(e.title, e.link)}
              <p className={c.sub}>
                {je(e.lang, "", "In ")}{e.booktitle}
                {e.volume && je(e.lang, "，", ", vol. ") + e.volume}
                {e.number && je(e.lang, "，no. ", ", no. ") + e.number}
                {e.series && " of " + e.series}
                {je(e.lang, "，", ", ") + e.publisher}
                {e.pages && je(e.lang, "，", ", ") + renderPages(e.pages)}
                {je(e.lang, "，" + dts(e.at) + "．", ", " + dtsE(e.at) + ".")}
              </p>
            </li>
          );
        })
      }</ol>

      <h3>Books</h3>
      <ol>
        <li>
          <p className={c.author}>Naoki Katoh, Yuya Higashikawa, Hiro Ito, Atsuki Nagao, Tetsuo Shibuya, Adnan Sljoka, Kazuyuki Tanaka, and Yushi Uno:</p>
          <p className={c.title}></p>
          {renderTitle("Sublinear Computation Paradigm - Algorithmic Revolution in the Big Data Era", "https://link.springer.com/book/10.1007/978-981-16-4095-7")}
          <p className={c.sub}>Springer, Singapore, {dtsE({y: 2021, m: 10, d: 0})}. (Contributed article: Chapter 7. Compression and Pattern Matching)</p>
        </li>
      </ol>

      <h3>Theses</h3>
      <ol>
        <li>
          <p className={c.author}>Isamu Furuya:</p>
          <p className={c.title}>Repetition-Aware Lossless Compression</p>
          <p className={c.sub}>Ph.D. thesis, Hokkaido University, {dtsE({y: 2020, m: 8, d: 0})}.</p>
        </li>

        <li>
          <p className={c.author}>Isamu Furuya:</p>
          <p className={c.title}>Grammar Compression based on Maximal Repeats</p>
          <p className={c.sub}>Master's thesis, Hokkaido University, {dtsE({y: 2019, m: 2, d: 0})}.</p>
        </li>

        <li>
          <p className={c.author}>古谷 勇：</p>
          <p className={c.title}>自然数の分解を用いた高階圧縮の効率化</p>
          <p className={c.sub}>卒業論文，北海道大学，{dts({y: 2017, m: 2, d: 0})}．</p>
        </li>
      </ol>

    </section>

  );
};



