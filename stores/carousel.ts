
import { defineStore } from 'pinia';

export const useCarouselStore = defineStore('carousel', {
  state: () => ({
    activeIndex: 0,
  }),
  actions: {
    setActiveIndex(index: number) {
      this.activeIndex = index;
    },
  },
});
