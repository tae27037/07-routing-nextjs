"use client";

import type { Note } from "@/types/note";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  note: Note;
};

export default function NotePreviewClient({ note }: Props) {
  return <NotePreview note={note} />;
}
