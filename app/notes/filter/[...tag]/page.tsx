import { fetchNotes } from "@/lib/api";
import NotesList from "@/components/NoteList/NoteList";
import css from "./page.module.css";

type Props = {
  params: {
    tag?: string[];
  };
};

export default async function FilterNotesPage({ params }: Props) {
  const tagFromUrl = params.tag?.[0] ?? "all";
  const tag = tagFromUrl === "all" ? undefined : tagFromUrl;

  const data = await fetchNotes({
    page: 1,
    perPage: 12,
    tag, // якщо undefined — у lib/api.ts воно не відправиться
  });

  const notes = data.notes; // ✅ це Note[]

  return (
    <div className={css.wrapper}>
      <NotesList notes={notes} />
    </div>
  );
}
