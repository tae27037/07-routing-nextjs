import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import css from "./page.module.css";

type Props = {
  params: {
    slug?: string[];
  };
};

export default async function FilterNotesPage({ params }: Props) {
  const filter = params.slug?.[0] ?? "all";
  const tag = filter === "all" ? undefined : filter;

  const data = await fetchNotes({ page: 1, perPage: 12, tag });
  const notes = data.notes;

  return (
    <div className={css.wrapper}>
      <NoteList notes={notes} />
    </div>
  );
}
