import { create } from 'zustand';

import {
  Actions,
  State,
} from './@types';

export const useSearchingPhase = create<State & Actions>((set) => ({
  phase: "form",
  setPhase: (status) => set((prev) => ({ ...prev, status })),
}));
