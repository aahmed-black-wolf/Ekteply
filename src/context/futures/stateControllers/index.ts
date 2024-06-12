import { create } from 'zustand';

import {
  Actions,
  State,
} from './@types';

export const useStateControllers = create<State & Actions>((set) => ({
  status: "close",
  setStatus: (status) => set((prev) => ({ ...prev, status })),
}));
