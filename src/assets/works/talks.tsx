import { Date } from "./../../utils/date";

export interface Talks {
  author: string[];
  title: string;
  event: string;
  at: Date;
  lang: string;
  link: string;
};


export const talks: Talks[] = [

  { title: "データストリームのための頻出部分文字列発見アルゴリズム",
    // {{{
    author: [
      "鳥谷部 直弥", 
      "古谷 勇", 
      "喜田 拓也", 
    ],
    event: "情報処理北海道シンポジウム 2019",
    at: {y: 2019, m: 10, d: 5},
    lang: "ja",
    link: "https://hokkaido.ipsj.or.jp/info2019/",
  }, // }}}

  { title: "A Compact Bit Encoding Method for MR-RePair",
    // {{{
    author: [
      "Isamu Furuya", 
    ],
    event: "2019 Summer International Symposium on Big-Data, Cybersecurity and IoT",
    at: {y: 2019, m: 8, d: 8},
    lang: "en",
    link: "https://gi-core.oia.hokudai.ac.jp/gsb/2019/07/24/2019-summer-international-symposium/"
  }, // }}}

  { title: "A Compact Expression of Church Numerals and Its Application to Higher-Order Compression",
    // {{{
    author: [
      "Isamu Furuya", 
      "Takuya Kida", 
    ],
    event: "The 20th Korea-Japan Joint Workshop on Algorithms and Computation",
    at: {y: 2017, m: 8, d: 25},
    lang: "en",
    link: "http://isa.hanyang.ac.kr/waac2017.html",
  }, // }}}

  { title: "A Compact Expression of Church Numerals and Its Application to Higher-Order Compression",
    // {{{
    author: [
      "古谷 勇", 
      "喜田 拓也", 
    ],
    event: "情報処理北海道シンポジウム 2017",
    at: {y: 2017, m: 10, d: 7},
    lang: "ja",
    link: "https://hokkaido.ipsj.or.jp/info2017/",
  }, // }}}

  { title: "ST-RePair",
    // {{{
    author: [
      "古谷 勇",
    ],
    event: "STRセミナー2019",
    at: {y: 2019, m: 3, d: 7},
    lang: "ja",
    link: "http://www-ikn.ist.hokudai.ac.jp/semi/STRseminar2019.html",
  }, // }}}

  { title: "SLP表現された文字列のLyndon分解アルゴリズム",
    // {{{
    author: [
      "古谷 勇",
      "中島 祐人",
      "井 智弘",
      "稲永 俊介",
      "坂内 英夫",
      "竹田 正幸",
    ],
    event: "基盤(S) 離散構造処理系プロジェクト 2018年度 初夏のワークショップ",
    at: {y: 2018, m: 7, d: 6},
    lang: "ja",
    link: "http://133.87.133.40/html/php/sub_html.php?id=39",
  }, // }}}

  { title: "RePairにおける文法サイズの差分解析",
    // {{{
    author: [
      "古谷 勇",
      "髙木 拓也",
      "中島 祐人",
      "稲永 俊介",
      "坂内 英夫",
      "喜田 拓也",
    ],
    event: "基盤(S) 離散構造処理系プロジェクト 2018年度 初夏のワークショップ",
    at: {y: 2018, m: 7, d: 6},
    lang: "ja",
    link: "http://133.87.133.40/html/php/sub_html.php?id=39",
  }, // }}}

  { title: "有意性を考慮した菱形エピソードの効率よいマイニング",
    // {{{
    author: [
      "谷 陽太",
      "古谷 勇", 
      "平田 耕一",
      "有村 博紀",
    ],
    event: "基盤(S) 離散構造処理系プロジェクト 2018年度 初夏のワークショップ",
    at: {y: 2018, m: 7, d: 6},
    lang: "ja",
    link: "http://133.87.133.40/html/php/sub_html.php?id=39",
  }, // }}}

  { title: "MR-RePair: Maximal repeat を用いた文法圧縮",
    // {{{
    author: [
      "古谷 勇",
      "髙木 拓也",
      "中島 祐人",
      "稲永 俊介",
      "坂内 英夫",
      "喜田 拓也",
    ],
    event: "STRセミナー2018",
    at: {y: 2018, m: 3, d: 18},
    lang: "ja",
    link: "https://str.i.kyushu-u.ac.jp/events/STRseminar/2018.03/",
  }, // }}}

  { title: "チャーチ数の超対数圧縮表現",
    // {{{
    author: [
      "古谷 勇",
      "喜田 拓也",
    ],
    event: "情報系 WINTER FESTA Episode3",
    at: {y: 2017, m: 12, d: 25},
    lang: "ja",
    link: "https://bigdata.nii.ac.jp/johokei-winterfesta3/",
  }, // }}}

  { title: "チャーチ数の超冪分解の高階圧縮への応用",
    // {{{
    author: [
      "古谷 勇",
      "喜田 拓也",
    ],
    event: "基盤(S) 離散構造処理系プロジェクト 2017年度 初夏のワークショップ",
    at: {y: 2017, m: 6, d: 23},
    lang: "ja",
    link: "http://www-erato.ist.hokudai.ac.jp/html/php/sub_html.php?id=33",
  }, // }}}

  { title: "自然数の分解を用いた高階圧縮の効率化",
    // {{{
    author: [
      "古谷 勇",
      "喜田 拓也",
    ],
    event: "STRセミナー2017",
    at: {y: 2017, m: 3, d: 16},
    lang: "ja",
    link: "https://www.iss.is.tohoku.ac.jp/semi/str2017.html",
  }, // }}}

];
