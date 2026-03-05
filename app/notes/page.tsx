import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type PageProps = {
  params: Promise<Record<string, never>>;
};

export default async function NotesPage({ params }: PageProps) {
  await params; // ✅ обязательно await (по требованиям проверки)

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { search: "", page: 1 }],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
