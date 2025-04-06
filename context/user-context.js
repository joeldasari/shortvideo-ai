"use client";

import { getCurrentUser, signOut } from "@/db/auth";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getCurrentUser();
        setUser(data?.user);
        setIsAuthenticated(data?.user?.role === "authenticated");
        setLoading(false);
      } catch (error) {
        if (error.message === "Auth session missing!") {
          setUser(null);
          setIsAuthenticated(false);
        } else {
          console.log("Error fetching user:", error);
          setUser(null);
          setIsAuthenticated(false);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, loading, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
