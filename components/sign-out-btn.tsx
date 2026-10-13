"use client";
import { signOut } from "@/lib/auth/auth";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function SignOutButton() {
  return (
    <DropdownMenuItem onClick={async () => await signOut()}>
      Log Out
    </DropdownMenuItem>
  );
}
