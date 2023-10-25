"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from ".";
import { useRouter } from "next/navigation";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // const { push } = useRouter();
  // const auth = useContext(AuthContext);

  // useEffect(() => {
  //   const dataUser = localStorage.
  //   if (dataUser) {
  //     auth.userData = JSON.parse(dataUser);
  //   }
  // }, [auth]);

  // const user = localStorage.getItem("@AuthData");
  // const expires = localStorage.getItem("@expires");

  // if (!user) {
  //   localStorage.clear();
  //   push("/login");
  //   return null;
  // }

  return children;
};
