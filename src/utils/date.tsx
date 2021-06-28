export interface Date {
  y: number;
  m: number;
  d: number;
};

export interface Period {
  from: Date;
  to: Date | null;
};

export const compDate: (a: Date, b: Date) => number = (b, a) => {
  return (a.y * 366 + a.m * 31 + a.d) - (b.y * 366 + b.m * 31 + b.d);
};


export const dtw: (date: Date) => string = date => {
  if (date.y < 2019) return "平成" + String(date.y - 1989 + 1);
  else if (date.y === 2019 && date.m < 5) return "平成31";
  else if (date.y === 2019) return "令和元";
  else return "令和" + String(date.y - 2019 + 1);
};

export const numToMonth: (m: number) => string = m => {
  switch (m) {
    case  1: return "Jan.";
    case  2: return "Feb.";
    case  3: return "Mar.";
    case  4: return "Apr.";
    case  5: return "May";
    case  6: return "June";
    case  7: return "July";
    case  8: return "Aug.";
    case  9: return "Sep.";
    case 10: return "Oct.";
    case 11: return "Nov.";
    case 12: return "Dec.";
    default: return "????";
  };
};

// date to str
export const dts: (date: Date | null) => string = date => {
  return date ? `${String(date.y)}年 ${String(date.m)}月` : "現在";
};

export const dtsW: (date: Date | null) => string = date => { // 和暦
  return date ? `${dtw(date)}年 ${String(date.m)}月` : "現在";
};

export const dtsE: (date: Date | null) => string = date => { // Eng
  return date ? `${numToMonth(date.m)} ${String(date.y)}` : "Present";
};


// period to str
export const ptsW: (p: Period) => string = p => { // 和暦
  if (p.from.y === p.to?.y) {
    if (p.from.m === p.to?.m) {
      return `${dtsW(p.from)}`; // y
    } else {
      return `${dtsW(p.from)} 〜 ${String(p.to.m)}月`; // y m - m
    };
  } else {
    return `${dtsW(p.from)} 〜 ${dtsW(p.to)}`; // y m - y m
  };
};

export const ptsE: (p: Period) => string = p => { // Eng
  if (p.from.y === p.to?.y) {
    if (p.from.m === p.to?.m) {
      return `${dtsE(p.to)}`; // m y
    } else {
      return `${numToMonth(p.from.m)} - ${dtsE(p.to)}`; // m - m y
    };
  } else {
    return `${dtsE(p.from)} - ${dtsE(p.to)}`; // m y - m y
  };
};


