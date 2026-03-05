import { fetchNoteById } from "@/lib/api";
import ModalRoute from "@/components/Modal/ModalRoute";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: { id: string };
};

export default async function NoteModalPage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (
    <ModalRoute>
      <NotePreview note={note} />
    </ModalRoute>
  );
}
