import { create } from "zustand";

export const useUsers = create((set) => ({
  users: {},
  loading: false,
  message: "",
  fetchUsers: async () => {
    set(() => ({ message: "sucess", loading: true }));
    try {
      const response = await fetch(
        "http://hn.algolia.com/api/v1/search?query=animal"
      );
      const data = await response.json();
      set(() => ({ users: data.hits, loading: false }));
    } catch (error) {
      set(() => ({ message: "err", loading: false }));
    }
  },
}));
