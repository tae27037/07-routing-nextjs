import { fetchNoteById } from "@/lib/api";
import ModalRoute from "@/components/Modal/ModalRoute";
import NotePreviewClient from "./NotePreview.client";

type Props = { params: { id: string } };

export default async function NoteModalPage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <ModalRoute>
      <NotePreviewClient note={note} />
    </ModalRoute>
  );
}
