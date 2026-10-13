"use client";
import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import { useSession, signOut } from "@/lib/auth/auth-client";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <BriefcaseIcon />
          <span>Job Tracker</span>
        </Link>

        <div className="flex items-center gap-4">
          {isPending ? (
            <Skeleton className="h-4 w-56 bg-gray-200 rounded-md" />
          ) : session ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-white">
                          {session.user.name.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />

                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {session.user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session.user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={async () => {
                        const res = await signOut();
                        if (res) {
                          router.push("/sign-in");
                        }
                      }}
                    >
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-primary hover:bg-primary/90">
                  Start for free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
