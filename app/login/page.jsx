"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignInWithGoogle } from "@/db/auth";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/user-context";
import { BarLoader } from "react-spinners";

export default function Login() {
  const { isAuthenticated, loading } = useUser();
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [loading, isAuthenticated, router]);

  if (loading) return <BarLoader width={"100%"} color="#a855f7" />;

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-xl xl:text-2xl font-bold bg-gradient-to-b from-foreground to-gray-400 text-transparent bg-clip-text">
          Please Sign In with Google to continue
        </h1>
        <Button
          className="cursor-pointer transition-colors duration-150 flex items-center gap-2"
          onClick={SignInWithGoogle}
        >
          <img src="/google-icon.png" alt="google-icon" className="w-6 h-6" />
          <span>Sign in with Google</span>
        </Button>
      </div>
    );
  }
}
