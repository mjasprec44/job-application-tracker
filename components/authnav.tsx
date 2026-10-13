import { getSession } from "@/lib/auth/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SignOutButton from "./sign-out-btn";

export default async function AuthNav() {
  const session = await getSession();
  console.log(session);
  if (session) {
    return (
      <div className="flex items-center">
        <Link href="/dashboard">
          <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
            Dashboard
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost">
                <Avatar>
                  <AvatarFallback className="bg-primary text-white text-center leading-none">
                    {session.user.name.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            }
          />

          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <div>
                  <p>{session.user.name}</p>
                  <p>{session.user.email}</p>
                </div>
              </DropdownMenuLabel>
              <SignOutButton />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/sign-in">
        <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
          Log In
        </Button>
      </Link>

      <Link href="/sign-up">
        <Button className="bg-primary hover:bg-primary/90">
          Start for free
        </Button>
      </Link>
    </div>
  );
}
