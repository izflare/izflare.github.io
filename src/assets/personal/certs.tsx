import { Date } from "./../../utils/date";

export interface Cert {
  name: string;
  org: string;
  at: Date;
};

export const compareDate: (p: Cert, q: Cert) => number = (p, q) => {
  const b = p.at;
  const a = q.at;
  return (a.y * 366 + a.m * 31 + a.d) - (b.y * 366 + b.m * 31 + b.d);
};

export const certs: Cert[] = [

  {
    name: "剣道三段",
    org: "全日本剣道連盟",
    at: {y: 2011, m: 0, d: 0},
  },

  {
    name: "居合道三段",
    org: "全日本居合道連盟",
    at: {y: 2015, m: 0, d: 0},
  },

  {
    name: "甲種火薬類取扱保安責任者",
    org: "全国火薬類保安協会・東京都",
    at: {y: 2017, m: 0, d: 0},
  },

  {
    name: "基本情報技術者",
    org: "情報処理推進機構・経済産業省",
    at: {y: 2009, m: 0, d: 0},
  },

  {
    name: "漢検準一級",
    org: "日本漢字能力検定協会",
    at: {y: 2014, m: 0, d: 0},
  },

  {
    name: "色彩検定二級",
    org: "色彩検定協会",
    at: {y: 2014, m: 0, d: 0},
  },

];


