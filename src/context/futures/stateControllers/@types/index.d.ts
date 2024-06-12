export type State = {
  status: "close" | "open";
};

export type Actions = {
  setStatus: (status: "close" | "open") => void;
};
