import { onUnmounted, readonly, ref } from "vue";

const isDark = ref(false);
const THEME_SELECTOR = "app-dark-mode";
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (isDarkMode: boolean): void => {
  isDark.value = isDarkMode;
  document.documentElement.classList.toggle(THEME_SELECTOR, isDarkMode);
};

const handleSystemChange = (event: MediaQueryListEvent): void => {
  if (!localStorage.getItem("theme")) {
    applyTheme(event.matches);
  }
};

const toggleTheme = (): void => {
  const newIsDark = !isDark.value;
  applyTheme(newIsDark);
  localStorage.setItem("theme", newIsDark ? "dark" : "light");
};

const initTheme = (): void => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme === "dark");
  } else {
    // Se não tem tema salvo, usa a preferência do sistema
    applyTheme(mediaQuery.matches);
  }

  mediaQuery.addEventListener("change", handleSystemChange);

  onUnmounted(() => {
    mediaQuery.removeEventListener("change", handleSystemChange);
  });
};

export function useTheme() {
  return {
    isDark: readonly(isDark),
    toggleTheme,
    initTheme,
  };
}
