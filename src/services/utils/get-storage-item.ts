export const getStorageItem = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }
  const item = window.localStorage.getItem(key);
  return !!item;
};
