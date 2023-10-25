export const setStorageItem = (key: string, value: string) => {
  if (typeof window === "undefined") {
    return null;
  }
  window.localStorage.setItem(key, value);
};
