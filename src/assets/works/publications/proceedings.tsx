import { Date } from "./../../../utils/date";

export interface Proceeding {
  author: string[];
  title: string;
  booktitle: string;
  publisher: string;
  series: string | null;
  volume: string | null;
  number: string | null;
  pages: {from: string, to: string} | null;
  at: Date;
  link: string | null;
  lang: string;
};

export const reviewed: Proceeding[] = [

  { title: "Re-Pair in Small Space",
    // {{{
    author: [
      "Dominik Köppl", 
      "Tomohiro I", 
      "Isamu Furuya", 
      "Yoshimasa Takabatake",
      "Kensuke Sakai", 
      "Keisuke Goto",
    ],
    booktitle : "Proceedings of the Prague Stringology Conference 2020",
    publisher: "Prague Stringology Club",
    series: null,
    volume: null,
    number: null,
    pages: {from: "134", to: "147"},
    at: {y: 2020, m: 8, d: 31},
    link: "http://stringology.org/event/2020/p12.html",
    lang: "en",
  }, // }}}

  { title: "Practical Repetition-Aware Grammar Compression",
    // {{{
    author: [
      "Isamu Furuya", 
    ],
    booktitle : "2020 Data Compression Conference",
    publisher: "IEEE",
    series: null,
    volume: null,
    number: null,
    pages: {from: "369", to: "369"},
    at: {y: 2020, m: 3, d: 24},
    link: "https://doi.org/10.1109/DCC47342.2020.00048",
    lang: "en",
  }, // }}}

  { title: "Re-Pair in Small Space",
    // {{{
    author: [
      "Dominik Köppl", 
      "Tomohiro I", 
      "Isamu Furuya", 
      "Yoshimasa Takabatake",
      "Kensuke Sakai", 
      "Keisuke Goto",
    ],
    booktitle : "2020 Data Compression Conference",
    publisher: "IEEE",
    series: null,
    volume: null,
    number: null,
    pages: {from: "377", to: "377"},
    at: {y: 2020, m: 3, d: 24},
    link: "https://doi.org/10.1109/DCC47342.2020.00092",
    lang: "en",
  }, // }}}

  { title: "MR-RePair: Grammar Compression Based on Maximal Repeats",
    // {{{
    author: [
      "Isamu Furuya", 
      "Takuya Takagi", 
      "Yuto Nakashima", 
      "Shunsuke Inenaga", 
      "Hideo Bannai", 
      "Takuya Kida",
    ],
    booktitle : "2019 Data Compression Conference",
    publisher: "IEEE",
    series: null,
    volume: null,
    number: null,
    pages: {from: "508", to: "517"},
    at: {y: 2019, m: 3, d: 26},
    link: "https://doi.org/10.1109/DCC.2019.00059",
    lang: "en",
  }, // }}}

  { title: "Lyndon Factorization of Grammar Compressed Texts Revisited",
    // {{{
    author: [
      "Isamu Furuya", 
      "Yuto Nakashima", 
      "Tomohiro I", 
      "Shunsuke Inenaga", 
      "Hideo Bannai", 
      "Masayuki Takeda",
    ],
    booktitle : "29th Annual Symposium on Combinatorial Pattern Matching",
    publisher: "Schloss Dagstuhl - Leibniz Center for Informatics",
    series: "Leibniz International Proceedings in Informatics (LIPIcs)",
    volume: "105",
    number: "24",
    pages: {from: "1", to: "10"},
    at: {y: 2018, m: 7, d: 2},
    link: "https://doi.org/10.4230/LIPIcs.CPM.2018.24",
    lang: "en",
  }, // }}}

  { title: "Compaction of Church Numerals for Higher-Order Compression",
    // {{{
    author: [
      "Isamu Furuya", 
      "Takuya Kida",
    ],
    booktitle : "2018 Data Compression Conference",
    publisher: "IEEE",
    series: null,
    volume: null,
    number: null,
    pages: {from: "408", to: "408"},
    at: {y: 2018, m: 3, d: 27},
    link: "https://doi.org/10.1109/DCC.2018.00061",
    lang: "en",
  }, // }}}

];



export const nonReviewed: Proceeding[] = [

  { title: "データストリームのための頻出部分文字列発見アルゴリズム",
    // {{{
    author: [
      "鳥谷部 直弥", 
      "古谷 勇", 
      "喜田 拓也", 
    ],
    booktitle : "研究報告アルゴリズム（AL）",
    publisher: "情報処理学会",
    series: null,
    volume: "2019-AL-173",
    number: "6",
    pages: {from: "1", to: "8"},
    at: {y: 2019, m: 5, d: 3},
    link: "http://id.nii.ac.jp/1001/00195434/",
    lang: "ja",
  }, // }}}

  { title: "極大反復部分文字列に基づく文法圧縮",
    // {{{
    author: [
      "古谷 勇", 
      "髙木 拓也",
      "中島 祐人", 
      "稲永 俊介",
      "坂内 英夫",
      "喜田 拓也", 
    ],
    booktitle : "研究報告アルゴリズム（AL）",
    publisher: "情報処理学会",
    series: null,
    volume: "2019-AL-171",
    number: "6",
    pages: {from: "1", to: "8"},
    at: {y: 2019, m: 1, d: 22},
    link: "http://id.nii.ac.jp/1001/00193864/",
    lang: "ja",
  }, // }}}

  { title: "イベント系列からの有意性を考慮した菱形エピソードマイニング",
    // {{{
    author: [
      "谷 陽太",
      "古谷 勇", 
      "平田 耕一",
      "有村 博紀",
    ],
    booktitle : "人工知能学会全国大会論文集",
    publisher: "人工知能学会",
    series: null,
    volume: "JSAI2018",
    number: null,
    pages: {from: "127", to: "127"},
    at: {y: 2018, m: 6, d: 5},
    link: "https://doi.org/10.11517/pjsai.JSAI2018.0_4Pin127",
    lang: "ja",
  }, // }}}

  { title: "高階圧縮における連続パターンのコンパクトな表現法",
    // {{{
    author: [
      "古谷 勇", 
      "喜田 拓也", 
    ],
    booktitle : "研究報告アルゴリズム（AL）",
    publisher: "情報処理学会",
    series: null,
    volume: "2017-AL-162",
    number: "1",
    pages: {from: "1", to: "8"},
    at: {y: 2017, m: 3, d: 6},
    link: "http://id.nii.ac.jp/1001/00178284/",
    lang: "ja",
  }, // }}}

];



