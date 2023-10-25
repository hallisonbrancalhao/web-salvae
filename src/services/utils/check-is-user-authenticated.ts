import { getStorageItem } from ".";

export const checkIsUserAuthenticated = () => {
  const userToken = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN);

  return !!userToken;
};
