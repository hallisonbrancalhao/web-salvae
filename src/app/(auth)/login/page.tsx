import { AuthProvider } from "@/core/context";
import LoginPage from "@/framework/screens/login/login-page";

export default function Login() {
  return (
    <>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    </>
  );
}
