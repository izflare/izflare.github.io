import * as React from "react";
import c from "./education.scss";

const educationList = [

  {
    status: "立教新座高等学校 卒業",
    date: "平成25年（2013年）3月",
  },

  {
    status: "北海道大学 工学部 情報エレクトロニクス系 入学",
    date: "平成25年（2013年）4月",
  },

  {
    status: "北海道大学 工学部 情報エレクトロニクス学科 コンピュータサイエンスコース 卒業",
    date: "平成29年（2017年）3月",
  },

  {
    status: "学士（工学）取得（北海道大学）",
    date: "平成29年（2017年）3月 23日",
  },

  {
    status: "北海道大学 大学院情報科学研究科 情報理工学専攻 修士課程 入学",
    date: "平成29年（2017年）4月",
  },

  {
    status: "同上 修了",
    date: "平成31年（2019年）3月",
  },

  {
    status: "修士（情報科学）取得（北海道大学）",
    date: "平成31年（2019年）3月 25日",
  },

  {
    status: "北海道大学 大学院情報科学院 情報科学専攻 情報理工学コース 博士後期課程 入学",
    date: "平成31年（2019年）4月",
  },

  {
    status: "同上 修了（在学期間短縮）",
    date: "令和2年（2020年）9月",
  },

  {
    status: "博士（情報科学）取得（北海道大学）",
    date: "令和2年（2020年）9月 25日",
  },

];

export const Education: React.FC<{}> = () => {
  return (
    <section>
      <h2>Education</h2>
      <hr />
      <ul className={c.education}>{
        educationList.map((e, i) => {
          return (
            <li key={i}>
              <p>{e.date}</p><p>{e.status}</p>
            </li>
          );
        })
      }</ul>
    </section>
  );
};
