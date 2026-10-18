"use client";
import { useState } from "react";
import { Board, Column } from "../models/models.types";

export function useBoard(initialBoard?: Board | null) {
  const [board, setBoard] = useState<Board | null>(initialBoard || null);
  const [columns, setColumns] = useState<Column[]>(initialBoard?.columns || []);
  const [error, setError] = useState<string | null>(null);

  // Track the last prop we synced from.
  const [prevInitialBoard, setPrevInitialBoard] = useState(initialBoard);

  // When the prop changes, reset state during render.
  if (initialBoard !== prevInitialBoard) {
    setPrevInitialBoard(initialBoard);
    setBoard(initialBoard ?? null);
    setColumns(initialBoard?.columns ?? []);
  }

  async function moveJobs(
    jobApplicationId: string,
    newColumnId: string,
    newOrder: number,
  ) {}

  return {
    board,
    columns,
    error,
    moveJobs,
  };
}
