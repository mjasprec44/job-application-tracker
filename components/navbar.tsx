import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import { Suspense } from "react";
import AuthNav from "./authnav";
import { Skeleton } from "./ui/skeleton";

export default async function Navbar() {
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

        <Suspense fallback={<Skeleton className="h-4 w-[150px]" />}>
          <AuthNav />
        </Suspense>
      </div>
    </nav>
  );
}
