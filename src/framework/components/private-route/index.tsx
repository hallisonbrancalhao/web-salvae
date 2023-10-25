"use client";
import { APP_ROUTES } from "@/core/constants";
import { checkIsUserAuthenticated } from "@/services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const isUserAuthenticaded = checkIsUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticaded) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticaded, push]);

  return (
    <>
      {!isUserAuthenticaded && null}
      {isUserAuthenticaded && children}
    </>
  );
};

export default PrivateRoute;
