"use client";

import { useUser } from "@/context/user-context";
import {
  CirclePlus,
  CircleUserRound,
  LayoutDashboard,
  LogOut,
  Play,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { user, loading, handleLogout } = useUser();
  const pathname = usePathname();
  const isAuthPage = pathname === "/login";
  const router = useRouter();

  return (
    <nav className="navbar padding-navbar">
      <Link href="/">
        <h1 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
          <Play className="bg-purple-500" />
          <span>shortvideo</span> <span className="text-purple-400">ai</span>
        </h1>
      </Link>
      {!isAuthPage && !user && !loading && (
        <Button
          className="cursor-pointer transition-colors duration-150"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      )}
      {user && !loading && (
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img className="h-5" src="/credits.png" alt="credits" />
            <span>5</span>
            <span className="hidden sm:block"> Credits</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full overflow-hidden">
              <Avatar className="cursor-pointer size-8 xl:size-10 object-cover">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback className="size-full">
                  {user?.user_metadata?.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {user?.user_metadata?.full_name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push("/create")}
                className="cursor-pointer"
              >
                <CirclePlus />
                <span>Create</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/dashboard")}
                className="cursor-pointer"
              >
                <LayoutDashboard />
                <span>Dashboard</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/upgrade")}
                className="cursor-pointer"
              >
                <ShieldPlus />
                <span>Upgrade</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/account")}
                className="cursor-pointer"
              >
                <CircleUserRound />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-red-500 focus:text-red-500"
              >
                <LogOut className="text-red-500" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}
