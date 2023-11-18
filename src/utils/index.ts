export enum Lang {
  PT = "pt",
  EN = "en",
}

export type Person = {
  nickname: string;
  img: string;
};

export const langs: { id: string; locale: string; label: string }[] = [
  { id: Lang.EN, locale: "en-US", label: "inglês" },
  { id: Lang.PT, locale: "pt-BR", label: "portugês do Brasil" },
];

export type Dialog = {
  user: 0 | 1; // 1 -> user || 0 -> AI
  text: string;
};
