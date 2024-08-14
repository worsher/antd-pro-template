import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AttributeEnumItem = {
  init?: boolean;
  enums?: Record<string, any[]>;
  addEnums?: (enums: Record<string, any[]>) => void;
  getEnums?: () => void;
};

const useAttributionEnums = create<AttributeEnumItem>()(
  immer((set, get) => ({
    init: false,
    enums: {},
    addEnums: (enums: Record<string, any[]>) => {
      set((state) => {
        state.enums = { ...state.enums, ...enums };
      });
    },
    getEnums: () => {
      if (!get()?.init) {
        set({ init: true });
        const enums: any[] = [];
        set({ enums: Object.fromEntries(enums), init: true });
      }
    },
  })),
);

export default useAttributionEnums;
