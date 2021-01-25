import { Date } from "./../../../utils/date";

export interface Journal {
  author: string[];
  title: string;
  journal: string;
  publisher: string;
  volume: string | null;
  number: string | null;
  pages: {from: string, to: string} | null;
  at: Date;
  link: string | null;
  lang: string;
};

export const journals: Journal[] = [

  {
    author: [
      "Dominik Köppl", 
      "Tomohiro I", 
      "Isamu Furuya", 
      "Yoshimasa Takabatake",
      "Kensuke Sakai", 
      "Keisuke Goto",
    ],
    title: "Re-Pair in Small Space",
    journal: "Algorithms 2021",
    publisher: "MDPI",
    volume: "14",
    number: "1:5",
    pages: null,
    at: {y: 2020, m: 12, d: 25},
    link: "https://doi.org/10.3390/a14010005",
    lang: "en",
  },

  {
    author: [
      "Isamu Furuya", 
      "Takuya Takagi", 
      "Yuto Nakashima", 
      "Shunsuke Inenaga", 
      "Hideo Bannai", 
      "Takuya Kida",
    ],
    title: "Practical Grammar Compression Based on Maximal Repeats",
    journal: "Algorithms 2020",
    publisher: "MDPI",
    volume: "13",
    number: "4:103",
    pages: null,
    at: {y: 2020, m: 4, d: 23},
    link: "https://doi.org/10.3390/a13040103",
    lang: "en",
  },

  {
    author: ["Isamu Furuya", "Takuya Kida"],
    title: "Compaction of Church Numerals",
    journal: "Algorithms 2019",
    publisher: "MDPI",
    volume: "12",
    number: "8:159",
    pages: null,
    at: {y: 2019, m: 8, d: 8},
    link: "https://doi.org/10.3390/a12080159",
    lang: "en",
  },

];


