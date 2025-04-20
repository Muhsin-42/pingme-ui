// store.ts
import {create} from "zustand";
import {Url, UrlStore} from "../../typings";

const useUrlStore = create<UrlStore>((set) => ({
  urls: [],

  setUrls: (urls: Url[]) => set({urls}),

  addUrl: (url) =>
    set((state) => ({
      urls: [url, ...state.urls],
    })),

  updateUrl: (id, updatedUrl) =>
    set((state) => ({
      urls: state.urls.map((url) =>
        url._id === id ? {...url, ...updatedUrl} : url
      ),
    })),

  deleteUrl: (id) =>
    set((state) => ({
      urls: state.urls.filter((url) => url._id !== id),
    })),
}));

export default useUrlStore;
