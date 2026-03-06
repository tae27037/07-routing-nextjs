"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import type { Note } from "@/types/note";

type Props = {
  tag?: string;
};

export default function NotesClient({ tag }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        tag,
      }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Failed to load notes.</p>;
  }

  const notes: Note[] = data.notes;

  return <NoteList notes={notes} />;
}
