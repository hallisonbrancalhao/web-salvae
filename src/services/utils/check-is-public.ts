import { APP_ROUTES } from "@/core/constants";

/**
 * @param asPath string
 * @returns boolean
 */

export const checkIsPublic = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(asPath);
};
