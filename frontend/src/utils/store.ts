import NewsType from "@/common/types/news/newsType";
import { create } from "zustand";

type NewsModalStore = {
  selectedNews: NewsType | null;
  setSelectedNews: (news: NewsType | null) => void;
};

type CurrentThemeStore = {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
};

export const useNewsModalStore = create<NewsModalStore>((set) => ({
  selectedNews: null,
  setSelectedNews: (news: NewsType | null) => set({ selectedNews: news }),
}));

export const useCurrentThemeStore = create<CurrentThemeStore>((set) => ({
  currentTheme: "dark",
  setCurrentTheme: (theme: string) => set({ currentTheme: theme }),
}));
