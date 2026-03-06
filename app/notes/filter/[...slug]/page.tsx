import NotesClient from "./Notes.client";
import css from "./page.module.css";

type Props = {
  params: {
    slug?: string[];
  };
};

export default function FilterNotesPage({ params }: Props) {
  const filter = params.slug?.[0] ?? "all";
  const tag = filter === "all" ? undefined : filter;

  return (
    <div className={css.wrapper}>
      <NotesClient tag={tag} />
    </div>
  );
}
