import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Street Light Management System - Next.js Dashboard Template",
  description: "This is Next.js Signin Page Street Light Management System Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
