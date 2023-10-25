"use client";
import { APP_ROUTES } from "@/core/constants";
import { checkIsUserAuthenticated } from "@/services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = checkIsUserAuthenticated();
    setIsUserAuthenticated(authStatus);
    if (!authStatus) {
      push(APP_ROUTES.public.login);
    }
  }, [push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
