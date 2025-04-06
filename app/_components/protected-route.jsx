"use client";

import { useUser } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function ProtectedRoute({ children }) {
  const { loading, isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading) return <BarLoader width={"100%"} color="#a855f7" />;

  if (isAuthenticated) return children;
}
