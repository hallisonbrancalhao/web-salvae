export const removeStorageItem = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }
  window.localStorage.removeItem(key);
};
