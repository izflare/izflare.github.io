import { Date } from "./../../utils/date";

export interface Award {
  name: string;
  org: string;
  at: Date;
};

export const awards: Award[] = [

  {
    name: "2019年度 情報処理学会北海道支部 学術研究賞",
    org: "情報処理学会北海道支部",
    at: {y: 2019, m: 10, d: 5},
  },

  {
    name: "平成30年度 北海道大学 大学院情報科学研究科 情報理工学専攻 専攻長賞",
    org: "北海道大学 大学院情報科学研究科",
    at: {y: 2019, m: 3, d: 25},
  },

];

