import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}
