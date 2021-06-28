import * as AFF from "./../affiliation";
import { Date, Period } from "./../../utils/date";

export interface Position {
  affiliation: AFF.Affiliation;
  status: {
    ja: string;
    en: string;
  };
  period: Period;
};

export const positions: Position[] = [

  {
    affiliation: AFF.nec_sec,
    status: {
      ja: "研究員",
      en: "Researcher",
    },
    period: {
      from: {y: 2021, m: 4, d: 1},
      to: null,
    },
  },

  {
    affiliation: AFF.ikn,
    status: {
      ja: "博士研究員",
      en: "Postdoctoral Researcher",
    },
    period: {
      from: {y: 2020, m: 10, d: 1},
      to: {y: 2021, m: 3, d: 31},
    },
  },

  {
    affiliation: AFF.jsps,
    status: {
      ja: "特別研究員 PD",
      en: "PD of Research Fellowship for Young Scientists",
    },
    period: {
      from: {y: 2020, m: 10, d: 1},
      to: {y: 2021, m: 3, d: 31},
    },
  },

  {
    affiliation: AFF.jsps,
    status: {
      ja: "特別研究員 DC2",
      en: "DC2 of Research Fellowship for Young Scientists",
    },
    period: {
      from: {y: 2020, m: 4, d: 1},
      to: {y: 2020, m: 9, d: 30}
    },
  },

  {
    affiliation: AFF.hgu,
    status: {
      ja: "非常勤講師",
      en: "Part-time Lecturer",
    },
    period: {
      from: {y: 2019, m: 10, d: 1},
      to: {y: 2020, m: 3, d: 31}
    },
  },

  {
    affiliation: AFF.gsb,
    status: {
      ja: "RA",
      en: "Research Assistant",
    },
    period: {
      from: {y: 2019, m: 7, d: 1},
      to: {y: 2020, m: 9, d: 30}
    },
  },

  {
    affiliation: AFF.dsmsp,
    status: {
      ja: "RA",
      en: "Research Assistant",
    },
    period: {
      from: {y: 2019, m: 5, d: 1},
      to: {y: 2019, m: 6, d: 30}
    },
  },

  {
    affiliation: AFF.dsmsp,
    status: {
      ja: "短期支援員",
      en: "Part-time Research Assistant",
    },
    period: {
      from: {y: 2017, m: 5, d: 1},
      to: {y: 2019, m: 3, d: 31}
    },
  },

  {
    affiliation: AFF.crest,
    status: {
      ja: "RA",
      en: "Research Assistant",
    },
    period: {
      from: {y: 2017, m: 4, d: 1},
      to: {y: 2020, m: 9, d: 31}
    },
  },

  {
    affiliation: AFF.md,
    status: {
      ja: "インターンシップ",
      en: "Internship",
    },
    period: {
      from: {y: 2019, m: 8, d: 1},
      to: {y: 2019, m: 9, d: 31}
    },
  },

  {
    affiliation: AFF.huse,
    status: {
      ja: "情報理工学演習I TF",
      en: "Teaching Fellow",
    },
    period: {
      from: {y: 2019, m: 10, d: 1},
      to: {y: 2020, m: 2, d: 28}
    },
  },

  {
    affiliation: AFF.huse,
    status: {
      ja: "情報理工学実験III TF",
      en: "Teaching Fellow",
    },
    period: {
      from: {y: 2019, m: 4, d: 1},
      to: {y: 2019, m: 8, d: 31}
    },
  },

  {
    affiliation: AFF.huse,
    status: {
      ja: "情報理工学実験I TA",
      en: "Teaching Assistant",
    },
    period: {
      from: {y: 2018, m: 5, d: 1},
      to: {y: 2018, m: 5, d: 31}
    },
  },

  {
    affiliation: AFF.huse,
    status: {
      ja: "情報理工学実験III TA",
      en: "Teaching Assistant",
    },
    period: {
      from: {y: 2018, m: 4, d: 1},
      to: {y: 2018, m: 5, d: 31}
    },
  },

  {
    affiliation: AFF.huse,
    status: {
      ja: "情報理工学演習III TA",
      en: "Teaching Assistant",
    },
    period: {
      from: {y: 2017, m: 4, d: 1},
      to: {y: 2017, m: 5, d: 31}
    },
  },

];


