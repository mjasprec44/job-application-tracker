import KanbanBoard from "@/components/kanban-board";
import { Skeleton } from "@/components/ui/skeleton";
import { getSession } from "@/lib/auth/auth";
import dbConnect from "@/lib/db";
import { Board } from "@/lib/models";
import { Suspense } from "react";

async function DashboardContent() {
  const session = await getSession();

  await dbConnect();

  const data = await Board.findOne({
    userId: session?.user.id,
    name: "Job Hunt",
  }).populate({ path: "columns", populate: { path: "jobApplications" } });
  const board = JSON.parse(JSON.stringify(data));

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{board.name}</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>

        <KanbanBoard board={board} userId={session?.user.id} />
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<Skeleton className="h-40 w-40 rounded-md " />}>
      <DashboardContent />
    </Suspense>
  );
}
