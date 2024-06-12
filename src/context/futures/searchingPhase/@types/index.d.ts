type Searching = "form" | "searching" | "process";

export type State = {
  phase: Searching;
};

export type Actions = {
  setPhase: (status: Searching) => void;
};
