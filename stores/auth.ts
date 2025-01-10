import { defineStore } from 'pinia';
import type { User } from 'firebase/auth'; // Firebase User tipini import et

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null, // Kullanıcıyı Firebase User tipiyle tanımladık
    isLoggedIn: false,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
      this.isLoggedIn = true;
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
  },
});
